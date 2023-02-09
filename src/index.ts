/*
removeEmptyObjectsFromResponse will accept Object as argument
and return cleaned Object. The cleaning processing will remove
undefined, '', NaN, etc
@Author - Madhukant Dinker
@Date - 03/Feb/2023
*/
export function removeEmptyObjects(inData: any) {
  // Loop through the rool attributes and start checking for empty object
  Object.keys(inData).forEach((key) => {
    // If it's Object
    if (inData[key] && typeof inData[key] === 'object') {
      // Call the same function with new Object
      const childObject = removeEmptyObjects(inData[key]);
      // Delete if there is no child inside Object
      if (childObject === undefined) {
        delete inData[key];
      }
      // Else it may be Blank, null, undefined so delete
    } else if (inData[key] === '' || inData[key] === null || inData[key] === undefined) {
      delete inData[key];
    }
  });

  // Cleanup empty array and null/s inside array
  if (inData instanceof Array) {
    if (Object.values(inData).length === 0) {
      return undefined;
    } else {
      for (let j = 0; j < inData.length; j++) {
        if (inData[j] === undefined || inData[j] === null) {
          inData.splice(j, 1);
          j--;
        }
      }
      return inData;
    }
  }

  // Return in case of data present or it's array with data either undefined
  return Object.keys(inData).length > 0 || inData instanceof Array ? inData : undefined;
}
