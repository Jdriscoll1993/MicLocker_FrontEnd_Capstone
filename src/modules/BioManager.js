const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/bios/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/bios`).then(e => e.json())
  },
  // deleteBio(id) {
  //   return fetch(`${remoteURL}/bio/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //   }).then(e => e.json())
  // },
  // postBio(e) {
  //   return fetch(`${remoteURL}/bio`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(e)
  //   }).then(e => e.json())
  // },
  putBio(editedBio) {
    return fetch(`${remoteURL}/bios/${editedBio.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedBio)
    }).then(data => data.json());
  }
}
