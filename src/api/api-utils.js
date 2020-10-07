export const handleError = (error) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    return Promise.reject(error.response);
  }

  if (error.request) {
    // The request was made but no response was received
    return Promise.reject(error.request);
  }

  // Something happened in setting up the request that triggered an Error
  return Promise.reject(error.toJSON());
};
