let scrollHandler;

function throttle(fn, wait) {
  let lastTime = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}

export function setupInfiniteScroll(callback) {
  removeInfiniteScroll(); 
  scrollHandler = throttle(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 200
    ) {
      callback();
    }
  }, 150);
  window.addEventListener("scroll", scrollHandler);
}

export function removeInfiniteScroll() {
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
    scrollHandler = null;
  }
}
