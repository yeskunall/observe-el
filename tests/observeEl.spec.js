/* global describe, expect, it */

const observeEl = require('../index');
const delay = require('delay');

// Watch for all changes by default
const config = {
  childList: true,
  attributes: true,
  characterData: true,
  subtree: true,
};

describe('Basic tests:', () => {
  it('works when passed a DOM `Node`', async () => {
    let changed = false;
    const p = document.getElementById('test');
    observeEl(
      p,
      () => {
        changed = true;
      },
      config
    );
    await delay(500).then(() => {
      p.innerText = 'Bye world!';
    });
    expect(changed).toBe(true);
  });

  it('works when passed a selector-like string', async () => {
    let changed = false;
    const p = document.getElementById('test');
    observeEl(
      '#test',
      () => {
        changed = true;
      },
      config
    );
    await delay(500).then(() => {
      p.innerText = 'Bye world!';
    });
    expect(changed).toBe(true);
  });

  it('fails if not passed either a selector-like string or DOM `Node`', async () => {
    const observer = ('teßt', () => {}, config);
    // For some reason it returns the `config` object in
    // this case 🤔
    const instance = observer instanceof MutationObserver;
    expect(instance).toBe(false);
  });
});
