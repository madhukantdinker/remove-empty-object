import { removeEmptyObjects } from '../index';

let testData = {
  a: 'madhukant',
  b: 'dinker',
  c: {
    d: [{}, {}, {}],
    e: {
      f: {},
      g: {},
      h: {},
    },
    i: [1, { j: 'hello', k: 'world' }, 3, null],
  },
};

let expectedData = {
  a: 'madhukant',
  b: 'dinker',
  c: {
    i: [1, { j: 'hello', k: 'world' }, 3],
  },
};

test('My Testing Madhukant', () => {
  expect(removeEmptyObjects(testData)).toStrictEqual(expectedData);
});
