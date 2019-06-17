import { getUserFromLocalStorage } from "../authentication/userManager";

const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/bios/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/bios`).then(e => e.json())
  },
  getOneUser(id){
    return fetch(`${remoteURL}/bios?/userId=${id}`)
  },
  // deleteBio(id) {
  //   return fetch(`${remoteURL}/bio/${id}`, {
  //     method: "DELETE",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //   }).then(e => e.json())
  // },
  postBio(newBio) {
    return fetch(`${remoteURL}/bios`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBio)
    }).then(e => e.json())
  },
  putBio(editedBio) {

    let user = getUserFromLocalStorage();
    editedBio.userId = user.id;
    return fetch(`${remoteURL}/bios/${editedBio.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedBio)
    }).then(data => data.json());
  }
}
