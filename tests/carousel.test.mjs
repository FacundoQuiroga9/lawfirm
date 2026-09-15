import test from 'node:test';
import assert from 'node:assert/strict';
import { carouselReducer, initialCarouselState, canAutoplay, swipeDirection, ROTATION_DELAY } from '../src/components/Reviews/carouselState.js';
import { googleReviewCollection, verifiedFiveStarReviews } from '../src/data/googleReviews.js';

const environment = { count: 3, visible: true, pageVisible: true };
const move = (state, direction, count = 3, manual = true) => carouselReducer(state, { type: 'move', direction, count, manual, animate: true });

test('loops forward and backward; zero and one review cannot rotate', () => {
  assert.equal(move(initialCarouselState, -1).index, 2);
  assert.equal(move(move(initialCarouselState, -1), 1).index, 0);
  assert.equal(move(initialCarouselState, 1, 0), initialCarouselState);
  assert.equal(move(initialCarouselState, 1, 1), initialCarouselState);
  assert.equal(canAutoplay({ ...environment, count: 1 }), false);
  assert.equal(canAutoplay({ ...environment, count: 0 }), false);
  assert.equal(ROTATION_DELAY, 8000);
});

test('each pause source independently stops rotation', () => {
  assert.equal(canAutoplay(environment), true);
  for (const flag of ['hovered', 'focused', 'userPaused', 'reducedMotion', 'touching']) {
    assert.equal(canAutoplay({ ...environment, [flag]: true }), false, flag);
  }
  for (const flag of ['visible', 'pageVisible']) {
    assert.equal(canAutoplay({ ...environment, [flag]: false }), false, flag);
  }
});

test('manual pause persists across reading, navigation and environment changes', () => {
  let state = carouselReducer(initialCarouselState, { type: 'toggle-pause' });
  state = move(state, 1);
  state = carouselReducer(state, { type: 'settled' });
  assert.equal(state.userPaused, true);
  assert.equal(canAutoplay({ ...environment, ...state, hovered: false, focused: false }), false);
  state = carouselReducer(state, { type: 'toggle-pause' });
  assert.equal(canAutoplay({ ...environment, ...state }), true);
});

test('manual changes announce a position; autoplay never announces the review', () => {
  const manual = move(initialCarouselState, 1);
  assert.equal(manual.announcement, 'Review 2 of 3');
  assert.equal(move(manual, 1, 3, false).announcement, '');
});

test('horizontal swipe works both ways without consuming vertical scroll or taps', () => {
  const start = { x: 200, y: 200, time: 0 };
  assert.equal(swipeDirection(start, { x: 100, y: 210, time: 200 }), 1);
  assert.equal(swipeDirection(start, { x: 300, y: 210, time: 200 }), -1);
  assert.equal(swipeDirection(start, { x: 180, y: 350, time: 200 }), 0);
  assert.equal(swipeDirection(start, { x: 198, y: 201, time: 200 }), 0);
  assert.equal(swipeDirection(start, { x: 100, y: 210, time: 1200 }), 0);
  assert.equal(swipeDirection(null, { x: 100, y: 210, time: 200 }), 0);
});

// Synthetic records are confined to tests and are never imported by the site.
const fixture = { id: 'TEST-ONLY', author: '[Test fixture]', rating: 5, text: 'Test comment', source: 'Google Maps', retrievedAt: '2026-09-14', verified: true };
const collection = (reviews) => ({ profile: { verified: true, url: 'https://example.com/test-only' }, reviews });

test('publication requires verified identity, actual five stars, provenance and unique IDs', () => {
  const data = collection([fixture, fixture, { ...fixture, id: 'four', rating: 4 }, { ...fixture, id: 'unknown', verified: false }, { ...fixture, id: 'avvo', source: 'Avvo' }, { ...fixture, id: 'no-source-date', retrievedAt: '' }]);
  assert.deepEqual(verifiedFiveStarReviews(data), [fixture]);
  assert.deepEqual(verifiedFiveStarReviews({ ...data, profile: { ...data.profile, verified: false } }), []);
});

test('only comments are published, preserving original spelling and whitespace', () => {
  const text = 'Original  text.\n\nSpeling stays. — <no HTML> & punctuation!';
  const record = { ...fixture, text };
  assert.equal(verifiedFiveStarReviews(collection([record]))[0].text, text);
  assert.deepEqual(verifiedFiveStarReviews(collection([{ ...fixture, text: '' }, { ...fixture, text: ' \n ' }])), []);
});

test('the production snapshot makes no unsupported completeness claim', () => {
  assert.equal(googleReviewCollection.completeness.verifiedFiveStarCount, verifiedFiveStarReviews(googleReviewCollection).length);
  assert.equal(new URL(googleReviewCollection.profile.searchUrl).searchParams.get('kgmid'), '/g/1tddb7hb');
  if (!googleReviewCollection.profile.verified) assert.equal(googleReviewCollection.completeness.status, 'blocked');
  for (const review of googleReviewCollection.reviews) {
    assert.ok(review.excerpt.trim().length > 0, review.author);
    assert.ok(review.text.includes(review.excerpt), `${review.author}: highlight must be verbatim`);
  }
});

test('the requested authors stay excluded without rewriting names or comments', () => {
  const data = { ...collection([
    { ...fixture, id: 'facundo', author: ' Facundo Quiroga ' },
    { ...fixture, id: 'brittney', author: 'BRITTNEY JUSTICE' },
    fixture,
  ]), selection: googleReviewCollection.selection };
  assert.deepEqual(verifiedFiveStarReviews(data), [fixture]);
  assert.equal(googleReviewCollection.reviews.length, 11);
  assert.equal(googleReviewCollection.completeness.inspectedReviews, 15);
  assert.equal(googleReviewCollection.completeness.status, 'complete');
});
