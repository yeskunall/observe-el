const select = require('select-dom');

module.exports = (element, callback, options = { childList: true }) => {
  let el = element;
  if (typeof el === 'string') {
    el = select(el);
  }

  if (!el) {
    throw new Error(`Target ${element} is not a valid instance of \`Node\``);
  }

  const observer = new MutationObserver(callback);
  observer.observe(el, options);

  return observer;
};
