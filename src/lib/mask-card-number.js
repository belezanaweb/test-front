export default cardNumber => {
  const groups = cardNumber.split('.');

  return groups
    .map((group, index) => {
      if (index < groups.length - 1) {
        return group.replace(/\d/g, '*');
      }

      return group;
    })
    .join('.');
};
