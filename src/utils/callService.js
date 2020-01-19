import fetch from 'isomorphic-fetch';

export const callService = (url, method, params, customheader = {}) => {
  const headers = {
    'Content-Type': 'application/json',
    'Accept-Charset': 'utf-8',
    ...customheader,
  };

  const configHeaders = {
    method,
    headers,
  };

  if (method !== 'GET') {
    configHeaders.body = JSON.stringify(params);
  }

  return new Promise((resolve, reject) =>
    fetch(url, configHeaders)
      .then(response => {
        response
          .json()
          .then(json => {
            if (response.ok) {
              resolve(json);
            } else {
              reject(json);
            }
          })
          .catch(e => reject(e));
      })
      .catch(message => reject(message))
  );
};
