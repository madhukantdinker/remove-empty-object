import { removeEmptyObjects } from '../index';

let testData = {
	"a" : "madhukant",
	"b" : "dinker",
	"c" : {
		"d" : [{}, {}, {}],
		"e" : {
			"f" : {},
			"g" : {},
			"h" : {}
		}
	}
}

let expectedData = {
	"a" : "madhukant",
	"b" : "dinker",
	"c" : {
		"d" : [,,,]
	}
}

test('My Testing Madhukant', () => {
  expect(removeEmptyObjects(testData)).toStrictEqual(expectedData);
});