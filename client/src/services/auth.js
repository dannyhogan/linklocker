const url = process.env.REACT_APP_API_URL || '/';

function loginUser(formData) {

  return fetch(url + 'api/v1/user/login', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
    credentials: 'include'
  })
    .then(res => res.json());
}

function signUpUser(formData) {

  return fetch(url + 'api/v1/user/signup', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
    credentials: 'include'
  })
    .then(res => res.json());
}

function checkAuth(formData) {

  return fetch(url + 'api/v1/user/verify', {
    method: 'GET',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
    credentials: 'include'
  })
    .then(res => res.json())
}

function logOutUser() {

  return fetch(url + 'api/v1/user/logout', {
    method: 'GET',
    credentials: 'include'
  });
}


export { loginUser, signUpUser, checkAuth, logOutUser };
