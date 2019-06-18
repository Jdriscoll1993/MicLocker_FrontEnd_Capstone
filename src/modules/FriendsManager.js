import { getUserFromLocalStorage } from '../authentication/userManager';

const remoteURL = 'http://localhost:8088';

const users = {
  getUser(id) {
    return fetch(`${remoteURL}/users/${id}`).then(e => e.json());
  },
  getAll(user) {
    return fetch(`${remoteURL}/followUsers?follower=${user}&_expand=user`).then(
      e => e.json()
    );
  },
  getAllUsers() {
    return fetch(`${remoteURL}/users`).then(e => e.json());
  },
  getOneUser(id) {
    return fetch(`${remoteURL}/users?userId=${id}`).then(e => e.json());
  },
  addUserToFriendsList(user) {
    let sessionUser = getUserFromLocalStorage();
    const newRecord = { userId: user.id, follower: sessionUser.id };
    return fetch(`${remoteURL}/followUsers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecord)
    }).then(e => e.json());
  },

  checkForFollow(user) {
    let sessionUser = getUserFromLocalStorage();
    return fetch(
      `${remoteURL}/followUsers?follower=${sessionUser.id}&userId=${user.id}`
    ).then(e => e.json());
  },

  unfollowUser(id) {
    return fetch(`${remoteURL}/followUsers/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(e => e.json());
  },
  search(input) {
    return fetch(`${remoteURL}/users?name_like=${input}`).then(e => e.json());
  }
};

export default users;
