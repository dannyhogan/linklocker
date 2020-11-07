const url = process.env.REACT_APP_DEV || '/';

function createNewLink(formData) {

  return fetch(url + "api/v1/link/", {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
    credentials: 'include'
  })
    .then(res => res.json());
}

function getUserLinks(username) {

  return fetch(url + `api/v1/link/${username}`, {
    method: 'GET',
    headers: { "Content-Type": "application/json" },
    credentials: 'include'
  })
    .then(res => {
      if(res.status === 400) {
        throw new Error(`Unable to find profile for @${username}.`)
      } else {
        return res.json()
      }
    });
}

function handleRedirect(link, password) {

  return fetch(url + `api/v1/link/${link._id}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json", "Access-Control-Allow-Origin": "*"
    },
    body: password ? JSON.stringify({ password }) : null,
  });
}

export { createNewLink, getUserLinks, handleRedirect };
