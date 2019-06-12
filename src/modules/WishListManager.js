const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/wishItems/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/wishItems`).then(e => e.json())
  },
  deleteWishList(id) {
    return fetch(`${remoteURL}/wishItems/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  postWishList(e) {
    return fetch(`${remoteURL}/wishItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e)
    }).then(e => e.json())
  },
  putWishList(editedWishList) {
    return fetch(`${remoteURL}/wishItems/${editedWishList.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedWishList)
    }).then(data => data.json());
  }
}
