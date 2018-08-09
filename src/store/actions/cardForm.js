export const validateForm = data => ({
  type: "VALIDATE_FORM",
  payload: { data }
});

export const inValidateForm = () => ({
  type: "INVALIDATE_FORM"
});
