import { useLayoutEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import './motion.css';

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

// Progressive enhancement: cancelling an animation restores the approved layout.
// No CSS rule hides content while waiting for JavaScript or an observer.
export default function useSiteMotion(rootRef) {
  const reducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const finePointer = useMediaQuery('(hover: hover) and (pointer: fine)');

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (reducedMotion || !root || !Element.prototype.animate) return undefined;

    const animations = new Map();
    const observedElements = new Map();
    const started = new Set();
    const cleanups = [];
    const visibleSections = new Set();
    let scrollFrame = 0;

    const reveal = (element, delay = 0, variant = 'rise', duration = 950) => {
      if (!element) return;
      if (variant === 'line') element.parentElement.classList.add('motion-line-mask');
      // A translated line is clipped by its mask; observe the stable mask so
      // visibility detection cannot deadlock on an initially hidden glyph.
      const observedElement = variant === 'line' ? element.parentElement : element;
      const from = variant === 'portrait'
        ? { opacity: 0, transform: 'translate3d(36px, 0, 0) scale(0.97)' }
        : variant === 'line'
          ? { opacity: 0, transform: 'translate3d(0, 105%, 0) rotate(2deg)' }
          : variant === 'rule'
            ? { opacity: 0, transform: 'scaleX(0)' }
            : { opacity: 0, transform: 'translate3d(0, 32px, 0)' };
      const animation = element.animate(
        [from, { opacity: 1, transform: 'none' }],
        { duration, delay, easing: ease, fill: 'both' },
      );
      animation.pause();
      animation.onfinish = () => {
        animation.cancel();
        if (variant === 'line') element.parentElement.classList.remove('motion-line-mask');
        animations.delete(element);
        observer.unobserve(observedElement);
        observedElements.delete(observedElement);
      };
      animations.set(element, animation);
      observedElements.set(observedElement, element);
      observer.observe(observedElement);
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        const element = observedElements.get(target);
        const animation = animations.get(element);
        if (!animation) return;
        if (isIntersecting && !document.hidden) {
          started.add(element);
          animation.play();
        } else if (started.has(element)) {
          // An entrance never keeps running behind another section.
          animation.finish();
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });

    const one = (selector, ...options) => reveal(root.querySelector(selector), ...options);
    const group = (selector, delay = 0, step = 110, variant = 'rise') => {
      root.querySelectorAll(selector).forEach((element, i) => reveal(element, delay + i * step, variant));
    };

    one('.hero-kicker', 40);
    if (window.matchMedia('(max-width: 540px)').matches) {
      one('.hero-title', 150, 'rise', 1150);
    } else {
      group('.hero-title-line-inner', 130, 160, 'line');
    }
    one('.hero-accent', 440, 'rule');
    one('.hero-tagline', 540);
    one('.hero-btn', 680);
    group('.hero-trust-item', 820, 100);
    one('.hero-img', 260, 'portrait', 1350);
    group('.section-header > *', 0, 140);
    group('.service-card', 150, 140);
    one('.about-content .eyebrow');
    one('.about-content h2', 120);
    one('.about-rule', 200, 'rule');
    group('.about-copy > p', 240, 120);
    one('.about-cta', 430);
    one('.about-img', 120, 'portrait', 1250);
    one('.contact-layout', 0, 'rise', 1100);
    group('.contact-info > .eyebrow, .contact-info > h2, .contact-intro', 80, 100);
    group('.contact-item', 200, 85);
    one('.contact-call', 470);
    one('.reviews-panel', 0, 'rise', 1100);
    group('.reviews-intro > *', 120, 110);
    one('.review-card', 300, 'rise', 1100);

    // Focus and fragment navigation must never land on invisible content.
    const revealFocused = (event) => {
      animations.forEach((animation, element) => {
        if (element.contains(event.target)) animation.finish();
      });
    };
    root.addEventListener('focusin', revealFocused);
    cleanups.push(() => root.removeEventListener('focusin', revealFocused));

    const updateDepth = () => {
      scrollFrame = 0;
      if (document.hidden) return;
      visibleSections.forEach((section) => {
        const bounds = section.getBoundingClientRect();
        const travel = (window.innerHeight / 2 - bounds.top - bounds.height / 2) * 0.055;
        section.style.setProperty('--decorative-y', `${Math.max(-26, Math.min(26, travel)).toFixed(1)}px`);
      });
    };
    const scheduleDepth = () => {
      if (!scrollFrame && visibleSections.size && !document.hidden) {
        scrollFrame = window.requestAnimationFrame(updateDepth);
      }
    };
    const depthObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) visibleSections.add(target);
        else visibleSections.delete(target);
      });
      scheduleDepth();
    });

    if (finePointer) {
      root.querySelectorAll('section').forEach((section) => depthObserver.observe(section));
      window.addEventListener('scroll', scheduleDepth, { passive: true });
      window.addEventListener('resize', scheduleDepth, { passive: true });

      root.querySelectorAll('.service-card').forEach((card) => {
        let frame = 0;
        let point;
        const reset = () => {
          window.cancelAnimationFrame(frame);
          frame = 0;
          card.classList.remove('is-tilting');
          ['--tilt-x', '--tilt-y', '--light-x', '--light-y'].forEach((property) => card.style.removeProperty(property));
        };
        const move = (event) => {
          if (event.pointerType !== 'mouse' || document.hidden) return;
          point = { x: event.clientX, y: event.clientY };
          if (frame) return;
          frame = window.requestAnimationFrame(() => {
            frame = 0;
            const rect = card.getBoundingClientRect();
            const x = Math.max(0, Math.min(1, (point.x - rect.left) / rect.width));
            const y = Math.max(0, Math.min(1, (point.y - rect.top) / rect.height));
            card.style.setProperty('--tilt-x', `${(0.5 - y) * 4}deg`);
            card.style.setProperty('--tilt-y', `${(x - 0.5) * 4}deg`);
            card.style.setProperty('--light-x', `${x * 100}%`);
            card.style.setProperty('--light-y', `${y * 100}%`);
            card.classList.add('is-tilting');
          });
        };
        card.addEventListener('pointermove', move, { passive: true });
        card.addEventListener('pointerleave', reset);
        window.addEventListener('scroll', reset, { passive: true });
        document.addEventListener('visibilitychange', reset);
        cleanups.push(() => {
          reset();
          card.removeEventListener('pointermove', move);
          card.removeEventListener('pointerleave', reset);
          window.removeEventListener('scroll', reset);
          document.removeEventListener('visibilitychange', reset);
        });
      });
    }

    const visibilityChanged = () => {
      if (document.hidden) {
        animations.forEach((animation, element) => {
          if (started.has(element)) animation.finish();
        });
        window.cancelAnimationFrame(scrollFrame);
        scrollFrame = 0;
      } else {
        // Re-observe in case the page first opened in a background tab.
        observedElements.forEach((_, target) => {
          observer.unobserve(target);
          observer.observe(target);
        });
        scheduleDepth();
      }
    };
    document.addEventListener('visibilitychange', visibilityChanged);

    return () => {
      observer.disconnect();
      depthObserver.disconnect();
      animations.forEach((animation) => animation.cancel());
      cleanups.forEach((cleanup) => cleanup());
      window.cancelAnimationFrame(scrollFrame);
      window.removeEventListener('scroll', scheduleDepth);
      window.removeEventListener('resize', scheduleDepth);
      document.removeEventListener('visibilitychange', visibilityChanged);
      root.querySelectorAll('section').forEach((section) => section.style.removeProperty('--decorative-y'));
      root.querySelectorAll('.motion-line-mask').forEach((element) => element.classList.remove('motion-line-mask'));
    };
  }, [rootRef, reducedMotion, finePointer]);
}
