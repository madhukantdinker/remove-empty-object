import { removeEmptyObjects } from '../index';

let date = new Date()

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
    l: date
  },
};

let expectedData = {
  a: 'madhukant',
  b: 'dinker',
  c: {
    i: [1, { j: 'hello', k: 'world' }, 3],
    l: date
  },
};

test('My Testing Madhukant', () => {
  // console.log(JSON.stringify(testData))
  // console.log(JSON.stringify(expectedData))
  expect(removeEmptyObjects(testData)).toStrictEqual(expectedData);
});
