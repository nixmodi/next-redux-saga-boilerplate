import Router from 'next/router';

export default function api(path, params, method, token, isFormData) {
  let options = {
    headers:
      isFormData === true
        ? {
            Accept: 'application/json',
            ...(token && { Authorization: token })
          }
        : {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            ...(token && { Authorization: token })
          },
    method: method,
    ...(params && { body: isFormData ? params : JSON.stringify(params) })
  };

  return new Promise((resolve, reject) => {
    fetch(`${process.env.API_URL}${path}`, options)
      .then(response => {
        return new Promise(resolve =>
          response.json().then(json =>
            resolve({
              status: response.status,
              ok: response.ok,
              json
            })
          )
        );
      })
      .then(response => {
        if (response.ok) {
          return resolve(response.json);
        } else if (response.status === 401) {
          if (path !== '/account/logout') {
            Router.push(
              `/login${
                Router.asPath !== '/login' && Router.asPath !== '/'
                  ? `?return=${Router.asPath}`
                  : ''
              }`
            );
          }
        } else {
          return reject(response.json);
        }
      })
      .catch(error =>
        reject({
          networkError: error.message
        })
      );
  });
}
