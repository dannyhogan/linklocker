const url = process.env.REACT_APP_API_URL || '/';

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
  })
    .then(res => {
      if(res.status === 400) {
        throw new Error(`Unable to find profile for @${username}.`)
      } else {
        return res.json()
      }
    });
}

function handleLinkClick(link, password) {

  return fetch(url + `api/v1/link/${link._id}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: password ? JSON.stringify({ password }) : null,
  })
    .then(res => res.json())
    .then(link => {
      if(link.url) {
        window.location.replace(link.url)
      } else {
        throw new Error('Invalid link password!');
      }
    })
}

export { createNewLink, getUserLinks, handleLinkClick };
