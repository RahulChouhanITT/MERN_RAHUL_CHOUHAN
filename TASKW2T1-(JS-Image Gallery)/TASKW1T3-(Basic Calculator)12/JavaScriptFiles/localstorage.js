const UsersKey = "UserData";

export function getList() {
  return JSON.parse(localStorage.getItem(UsersKey)) || [];
}

export function saveList(list) {
  localStorage.setItem(UsersKey, JSON.stringify(list));
}