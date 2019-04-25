# react-carabiner 🧗‍

[![npm](https://img.shields.io/npm/v/react-carabiner.svg)](https://www.npmjs.com/package/react-carabiner)
[![npm bundle size](https://img.shields.io/bundlephobia/min/react-carabiner.svg)](https://www.npmjs.com/package/react-carabiner)
[![npm](https://img.shields.io/npm/dt/react-carabiner.svg)](https://www.npmjs.com/package/react-carabiner)
[![GitHub](https://img.shields.io/github/license/zroyer/react-carabiner.svg)](https://github.com/zroyer/react-carabiner/blob/master/LICENSE)
[![GitHub](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/zroyer/react-carabiner/pulls)

A [React Hook](https://reactjs.org/docs/hooks-intro.html) to copy to the clipboard.

## Install

```
$ npm i react-carabiner
```

## Usage

The `useCarabiner` hook returns a tuple with two values:
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
