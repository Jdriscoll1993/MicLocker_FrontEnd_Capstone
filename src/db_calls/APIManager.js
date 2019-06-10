const remoteURL = 'http://localhost:5002';

export default {
  get(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`).then(e => e.json());
  },
  getAll(resource) {
    return fetch(`${remoteURL}/${resource}`).then(e => e.json());
  },
  delete(resource, id) {
    return fetch(`${remoteURL}/${resource}/${id}`, {
      method: 'DELETE'
    }).then(e => e.json());
  },
  post(resource) {
    return fetch(`${remoteURL}/${resource}`, {
      method: 'POST',
      headers: {
        'content-Type': 'application/json'
      },
      body: JSON.stringify(`${resource}`)
    }).then(e => e.json());
  },
  put(resource) {
    return fetch(`${remoteURL}/${resource}/`);
  },

  search(input) {
    return fetch(`${remoteURL}/social?name_like=${input}`).then(e => e.json());
  }
};
