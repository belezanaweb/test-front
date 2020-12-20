const replace = {
  numbers: (value: string, startRange: number, endRange: number, replaceTo: string) =>
    value
      .split('')
      .map((char, idx) => (char.match(/\d+/g) && idx >= startRange && idx <= endRange ? (char = replaceTo) : char))
      .join(''),
};

export default replace;
