export const post = (url, params) => {
  const config = {
    method: 'post',
    headers: new Headers({
      Authorization: 'Basic dHV2OjhIM3dJR3Vib2JMRkVzMw==',
      'content-type': 'application/json',
    }),
  };

  if (params) {
    config.body = JSON.stringify(params);
  }

  return fetch(url, config).then((response) => {
    if (!response.ok) {
      throw Error(response);
    }

    return response.json();
  });
};

export const get = (url, params) => {
  const config = {
    method: 'get',
    headers: new Headers({
      Authorization: 'Basic dHV2OjhIM3dJR3Vib2JMRkVzMw==',
      'content-type': 'application/json',
    }),
  };

  return fetch(
    `${url}?${
      params
        ? Object.keys(params)
          .map(item => `${item}=${params[item]}`)
          .join('&')
        : ''
    }`,
    config,
  ).then((response) => {
    if (!response.ok) {
      throw Error(response);
    }

    return response.json();
  });
};
