import { useEffect, useLayoutEffect, useReducer, useRef, useState } from 'react';
import { firm, reviewContent } from '../../data/siteContent';
import useMediaQuery from '../../hooks/useMediaQuery';
import { canAutoplay, carouselReducer, initialCarouselState, ROTATION_DELAY, swipeDirection } from './carouselState';
import Icon from '../shared/Icon';
import './Reviews.css';

function quoteText(review) {
  const text = review.excerpt || review.text;
  return text ? `“${text}”` : '';
}

function ReviewSlide({ review, profileUrl, ghost = false }) {
  return (
    <figure className={`review-slide${ghost ? ' review-slide--outgoing' : ''}`} aria-hidden={ghost || undefined} {...(ghost ? { inert: '' } : {})}>
      <div className="review-stars" role="img" aria-label={`${review.rating} out of 5 stars`}>
        <span aria-hidden="true">{'★'.repeat(review.rating)}</span>
      </div>
      <div className="review-quote-slot">
        {quoteText(review) && <blockquote cite={review.url || profileUrl}><p>{quoteText(review)}</p></blockquote>}
      </div>
      <figcaption>
        <strong>{review.author}</strong>
        <span className="review-source">
          <a href={review.url || profileUrl} target="_blank" rel="noopener noreferrer" tabIndex={ghost ? -1 : undefined} aria-label={`Read ${review.author}'s full review on Google`}>Full review on Google</a>
          {review.dateLabel && <time dateTime={review.publishedAt || undefined}>{review.dateLabel}</time>}
        </span>
      </figcaption>
    </figure>
  );
}

function ReviewCarousel({ reviews, profileUrl }) {
  const [state, dispatch] = useReducer(carouselReducer, initialCarouselState);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const [touching, setTouching] = useState(false);
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const cardRef = useRef(null);
  const stageRef = useRef(null);
  const measureRef = useRef(null);
  const captionMeasureRef = useRef(null);
  const touchStart = useRef(null);
  const suppressClick = useRef(false);
  const count = reviews.length;
  const running = canAutoplay({ count, ...state, reducedMotion, hovered, focused, visible, pageVisible, touching });

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0 });
    observer.observe(cardRef.current);
    const onVisibility = () => {
      setPageVisible(!document.hidden);
      if (document.hidden) {
        touchStart.current = null;
        setTouching(false);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  useEffect(() => {
    if (!running) return undefined;
    const timer = window.setTimeout(() => dispatch({ type: 'move', direction: 1, count, animate: true, manual: false }), ROTATION_DELAY);
    return () => window.clearTimeout(timer);
  }, [running, state.index, count]);

  // Measure the complete highlights at the real card width. A shared height
  // keeps transitions stable without clamping or leaving room for long originals.
  useLayoutEffect(() => {
    const card = cardRef.current;
    const measure = measureRef.current;
    let cancelled = false;
    let lastWidth = -1;
    const measureReviews = () => {
      if (cancelled) return;
      let maxHeight = 0;
      let maxCaptionHeight = 0;
      const caption = captionMeasureRef.current;
      reviews.forEach((review) => {
        measure.textContent = quoteText(review);
        const height = review.text ? measure.getBoundingClientRect().height : 0;
        maxHeight = Math.max(maxHeight, height);
        caption.querySelector('strong').textContent = review.author;
        caption.querySelector('time').textContent = review.dateLabel || '';
        maxCaptionHeight = Math.max(maxCaptionHeight, caption.getBoundingClientRect().height);
      });
      measure.textContent = '';
      card.style.setProperty('--review-text-height', `${Math.ceil(maxHeight)}px`);
      card.style.setProperty('--review-caption-height', `${Math.ceil(maxCaptionHeight)}px`);
    };
    const observer = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width !== lastWidth) {
        lastWidth = entry.contentRect.width;
        measureReviews();
      }
    });
    observer.observe(card);
    measureReviews();
    document.fonts?.ready.then(measureReviews);
    document.fonts?.addEventListener('loadingdone', measureReviews);
    return () => {
      cancelled = true;
      observer.disconnect();
      document.fonts?.removeEventListener('loadingdone', measureReviews);
    };
  }, [reviews]);

  useLayoutEffect(() => {
    if (state.previous === null) return undefined;
    if (reducedMotion || !visible || !pageVisible || !Element.prototype.animate) {
      dispatch({ type: 'settled' });
      return undefined;
    }
    const slides = stageRef.current.children;
    const options = { duration: 460, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'both' };
    const incoming = slides[0].animate([
      { opacity: 0, transform: `translateX(${state.direction * 18}px)` },
      { opacity: 1, transform: 'translateX(0)' },
    ], options);
    const outgoing = slides[1]?.animate([
      { opacity: 1, transform: 'translateX(0)' },
      { opacity: 0, transform: `translateX(${-state.direction * 12}px)` },
    ], options);
    incoming.onfinish = () => dispatch({ type: 'settled' });
    return () => { incoming.cancel(); outgoing?.cancel(); };
  }, [state.index, state.previous, state.direction, reducedMotion, visible, pageVisible]);

  const move = (direction) => {
    if (state.previous !== null) return;
    dispatch({ type: 'move', direction, count, animate: !reducedMotion, manual: true });
  };
  const pointerDown = (event) => {
    suppressClick.current = false;
    if (event.pointerType !== 'touch' || !event.isPrimary || event.target.closest('a, button')) return;
    touchStart.current = { x: event.clientX, y: event.clientY, time: event.timeStamp };
    setTouching(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };
  const pointerEnd = (event) => {
    const direction = swipeDirection(touchStart.current, { x: event.clientX, y: event.clientY, time: event.timeStamp });
    touchStart.current = null;
    setTouching(false);
    if (direction) {
      suppressClick.current = true;
      move(direction);
    }
  };

  const review = reviews[state.index];
  return (
    <div
      className="review-card review-carousel"
      ref={cardRef}
      role="region"
      aria-roledescription={count > 1 ? 'carousel' : undefined}
      aria-label="Client reviews"
      onPointerEnter={(event) => { if (event.pointerType === 'mouse') setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    >
      {count > 1 && (
        <div className="review-controls">
          <button type="button" className="review-control review-play" onClick={() => dispatch({ type: 'toggle-pause' })} aria-label={state.userPaused ? 'Resume automatic reviews' : 'Pause automatic reviews'} disabled={reducedMotion} aria-describedby={reducedMotion ? 'review-motion-note' : undefined}>
            <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden="true">
              {state.userPaused || reducedMotion ? <path d="M4 2 13 8 4 14Z" fill="currentColor" /> : <path d="M4 2v12M12 2v12" stroke="currentColor" strokeWidth="3" />}
            </svg>
          </button>
          <span className="review-counter" aria-hidden="true">{String(state.index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
          <button type="button" className="review-control" aria-label="Previous review" onClick={() => move(-1)} aria-disabled={state.previous !== null}>
            <Icon name="arrow" size={18} className="review-arrow-back" />
          </button>
          <button type="button" className="review-control" aria-label="Next review" onClick={() => move(1)} aria-disabled={state.previous !== null}>
            <Icon name="arrow" size={18} />
          </button>
        </div>
      )}
      <div className="review-stage" ref={stageRef} onPointerDown={pointerDown} onPointerUp={pointerEnd} onPointerCancel={() => { touchStart.current = null; setTouching(false); }} onClickCapture={(event) => { if (suppressClick.current) { event.preventDefault(); event.stopPropagation(); suppressClick.current = false; } }}>
        <ReviewSlide review={review} profileUrl={profileUrl} />
        {state.previous !== null && <ReviewSlide review={reviews[state.previous]} profileUrl={profileUrl} ghost />}
      </div>
      <figure className="review-measure" aria-hidden="true" inert="">
        <p className="review-measure-text" ref={measureRef} />
        <figcaption ref={captionMeasureRef}><strong /><span className="review-source"><a>Full review on Google</a><time /></span></figcaption>
      </figure>
      <span className="visually-hidden" role="status" aria-live="polite" aria-atomic="true">{state.announcement}</span>
      {reducedMotion && count > 1 && <span id="review-motion-note" className="visually-hidden">Automatic rotation is off because you prefer reduced motion.</span>}
    </div>
  );
}

const Reviews = ({ content = reviewContent }) => {
  const { reviews, collection } = content;
  const profileUrl = collection.profile.url;
  return (
    <section id="reviews" className="reviews-section section-pad" aria-labelledby="reviews-title">
      <div className="site-shell">
        <div className="reviews-panel">
          <div className="reviews-intro">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2 id="reviews-title">{content.heading}</h2>
            <a className="reviews-link" href={profileUrl || firm.googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <span>{profileUrl ? 'View reviews on Google' : 'View on Google Maps'}</span>
              <Icon name="arrow" size={18} className="button-arrow" />
            </a>
          </div>
          {reviews.length ? <ReviewCarousel reviews={reviews} profileUrl={profileUrl} /> : (
            <div className="review-card review-empty">
              <p className="review-empty-title">{content.emptyHeading}</p>
              <p>{content.emptyText}</p>
              <a
                className="reviews-link"
                href={profileUrl || firm.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.emptyCtaLabel}
                <Icon name="arrow" size={18} className="button-arrow" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
