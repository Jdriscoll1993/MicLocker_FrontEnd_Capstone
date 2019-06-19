import { getUserFromLocalStorage } from "../authentication/userManager";

const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/wishItems/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/wishItems`).then(e => e.json())
  },
  getOneUser(id){
    return fetch(`${remoteURL}/wishItems?userId=${id}`).then(e => e.json())
  },
  getWishById(id){
    return fetch(`${remoteURL}/wishItems/${id}`).then(e => e.json())
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
    let user = getUserFromLocalStorage();
    e.userId = user.id;
    return fetch(`${remoteURL}/wishItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e)
    }).then(e => e.json())
  },
  putWishList(editedWishList) {
    let user = getUserFromLocalStorage();
    editedWishList.userId = user.id;
    return fetch(`${remoteURL}/wishItems/${editedWishList.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedWishList)
    }).then(data => data.json());
  }
}
