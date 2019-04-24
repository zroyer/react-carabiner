# react-carabiner 🧗‍

[![npm](https://img.shields.io/npm/v/react-carabiner.svg)](https://www.npmjs.com/package/react-carabiner)
[![npm](https://img.shields.io/npm/dt/react-carabiner.svg)](https://www.npmjs.com/package/react-carabiner)

A [React Hook](https://reactjs.org/docs/hooks-intro.html) to copy to the clipboard.

## Install

```
$ npm i react-carabiner
```

## Use

The `useCarabiner` hook takes an argument of initial state and returns a tuple with two values:
- The state variable
- A function to update the state value

```JavaScript
import React from 'react';
import useCarabiner from 'react-carabiner';

function Example() {
  const [clipboard, updateClipboard] = useCarabiner();
  const sampleText = 'Click to copy my text!';

  return (
    <div>
      <p>Current clipboard content: {clipboard}</p>
      <button onClick={() => updateClipboard(sampleText)}>
        {sampleText}
      </button>
    </div>
  );
}
```
