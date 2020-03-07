export default (value, rawValue) => {
  if (rawValue.length === 7) {
    const now = new Date();
    const day = now.getDate() < 10 ? `0${now.getDate()}` : now.getDate();

    return new Date(
      `${rawValue
        .split('/')
        .reverse()
        .join('/')}/${day}`
    );
  }

  return new Date();
};
