export async function handleAsyncReduxData(promise, dispatch, {
  loadingActionName,
  errorActionName,
  successActionName,
}) {
  dispatch({ type: loadingActionName })
  const [error, data] = await to(promise)
  if (error) {
    return dispatch({ type: errorActionName, error })
  }
  return dispatch({ type: successActionName, data })
}

export async function to(promise) {
  try {
    const response = await promise
    return [null, response]
  } catch (error) {
    return [error, null]
  }
}
