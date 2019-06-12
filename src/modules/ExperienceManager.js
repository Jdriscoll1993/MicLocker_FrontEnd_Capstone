const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/experiences/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/experiences`).then(e => e.json())
  },
  deleteExperience(id) {
    return fetch(`${remoteURL}/experiences/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  postExperience(e) {
    return fetch(`${remoteURL}/experiences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e)
    }).then(e => e.json())
  },
  putExperience(editedExp) {
    return fetch(`${remoteURL}/experiences/${editedExp.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedExp)
    }).then(data => data.json());
  }
}
