const isEmptyObj = (obj) => {

  return typeof obj !== 'object'
    || Object.getOwnPropertyNames(obj).length === 0;

};

const isEmptyArray = (array) => {

  return !Array.isArray(array)
    || array.length === 0;

};

export {
  isEmptyObj,
  isEmptyArray,
};
