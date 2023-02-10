# Remove Empty Object from Nested Object

This utility will accept Object with empty objects in nested form and clean them.

## Installation

```sh
npm install remove-empty-object
```

## Uses

```js
import { removeEmptyObjects } from 'remove-empty-object'

let json = {
  a: 'madhukant',
  b: 'dinker',
  c: {
    d: [{}, {}, {}],
    e: {
      f: {},
      g: {},
      h: {},
    },
    i: [1, {j: 'hello', k: 'world'}, 3, null],
    l: new Date()
  },
};

let cleanedJson = removeEmptyObjects(json);

console.log(cleanedJson);
/*
Output of cleanedJson:

 {
  a: 'madhukant',
  b: 'dinker',
  c: {
    i: [1, {j: 'hello', k: 'world'}, 3],
    l: 2023-02-10T12:51:35.831Z
  },
}
*/

```


### Author
Madhukant Dinker
