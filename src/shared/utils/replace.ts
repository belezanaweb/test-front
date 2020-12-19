const replace = {
  numbers: (value: string, startRange: number, endRange: number, replaceTo: string) =>
    value
      .substring(startRange, endRange)
      .split('')
      .map((char) => (char.match(/\d+/g) ? (char = replaceTo) : char))
      .join('')
      .concat(value.substring(endRange, value.length)),
};

export default replace;
