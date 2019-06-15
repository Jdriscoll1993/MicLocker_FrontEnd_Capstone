import { getUserFromLocalStorage } from "../authentication/userManager";

const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/settings/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/settings`).then(e => e.json())
  },
  // deleteSettings(id) {
  //   return fetch(`${remoteURL}/settings/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //   }).then(e => e.json())
  // },
  postSettings(newSettings) {
    let user = getUserFromLocalStorage();
    newSettings.userId = user.id;
    return fetch(`${remoteURL}/settings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSettings)
    }).then(e => e.json())
  },
  putSettings(editedSettings) {

    let user = getUserFromLocalStorage();
    editedSettings.userId = user.id;
    return fetch(`${remoteURL}/settings/${editedSettings.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedSettings)
    }).then(data => data.json());
  }
}
