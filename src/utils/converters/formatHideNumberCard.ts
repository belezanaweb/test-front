export const formatHideMask = (value: string) => {
  if (!value) return 1;
  let newValue = value.replace(/\D/g, '');
  newValue = newValue.substring(newValue.length - 4);
  return `****.****.****.${newValue}`;
}
