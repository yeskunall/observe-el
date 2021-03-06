# observe-el [![Build Status](https://travis-ci.org/yeskunall/observe-el.svg?branch=master)](https://travis-ci.org/yeskunall/observe-el) [![npm](https://img.shields.io/npm/dt/observe-el.svg)](http://npm.im/observe-el)
> Easily react to changes in the DOM. Uses the MutationObserver API.

## Install

```shell
$ npm install observe-el
```

## Usage

```js
// observer.js
const observeEl = require('observe-el');

// Assuming a DOM Element with className `_17wu2` exists
let observer = observeEl('._17wu2', () => console.log('💡 DOM Element changed!'));

// main.js
const p = document.querySelector('._17wu2');
p.innerText = 'Changed text';

// Output
...
//=> 💡 DOM Element changed!
```

## API

### observeEl(element, callback, [options])

Returns an instance of `MutationObserver` and registers the instance to receive notifications of DOM mutations on the specified node.

### element

Type: `string` | [`Node`](https://developer.mozilla.org/en-US/docs/Web/API/Node)

If provided a `string`, it expects it to be a valid [CSS selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors).

### callback

Type: `Function`

The function which will be called on each DOM mutation. More on that [here](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver).

### options

Type: `object`

Default: `{ attributes: true, characterData: true, childList: true }`

Expects a `MutationObserverInit` object with at least one of `childList`, `attributes`, or `characterData` set to `true`.<br/>
__NOTE__: All 3 options are set to `true` by default. For a list of all valid options, see [here](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit).






