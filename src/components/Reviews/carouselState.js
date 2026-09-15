export const ROTATION_DELAY = 8000;

export const initialCarouselState = {
  index: 0, previous: null, direction: 1,
  userPaused: false, announcement: '',
};

export function canAutoplay({ count, userPaused, reducedMotion, hovered, focused, visible, pageVisible, touching }) {
  return count > 1 && !userPaused && !reducedMotion && !hovered &&
    !focused && visible && pageVisible && !touching;
}

export function carouselReducer(state, action) {
  switch (action.type) {
    case 'move': {
      if (action.count < 2) return state;
      const index = (state.index + action.direction + action.count) % action.count;
      return {
        ...state, index, previous: action.animate ? state.index : null,
        direction: action.direction,
        announcement: action.manual ? `Review ${index + 1} of ${action.count}` : '',
      };
    }
    case 'settled': return { ...state, previous: null };
    case 'toggle-pause': return { ...state, userPaused: !state.userPaused };
    default: return state;
  }
}

export function swipeDirection(start, end) {
  if (!start) return 0;
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  return Math.abs(dx) >= 50 && Math.abs(dx) > Math.abs(dy) * 1.5 && end.time - start.time < 900
    ? (dx < 0 ? 1 : -1) : 0;
}
