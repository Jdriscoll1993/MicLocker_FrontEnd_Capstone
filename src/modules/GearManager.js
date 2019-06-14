import { getUserFromLocalStorage } from "../authentication/userManager";

const remoteURL = "http://localhost:8088"

export default {
  get(id) {
    return fetch(`${remoteURL}/gearItems/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/gearItems`).then(e => e.json())
  },
  deleteGearItem(id) {
    return fetch(`${remoteURL}/gearItems/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  postGearItem(e) {
    let user = getUserFromLocalStorage();
    e.userId = user.id;
    return fetch(`${remoteURL}/gearItems`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(e)
    }).then(e => e.json())
  },
  putMyGear(editedGear) {
    let user = getUserFromLocalStorage();
    editedGear.userId = user.id;
    return fetch(`${remoteURL}/gearItems/${editedGear.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedGear)
    }).then(data => data.json());
  }
}
