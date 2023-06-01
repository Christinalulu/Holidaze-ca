const accessToken = "token";
const name = "name";
function saveToken(token) {
  saveToStorage("token", token);
}
function saveUser(name) {
  saveToStorage("name", name);
}
function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
function getToken() {
  return getStoredData(accessToken);
}
function getUsername() {
  return getStoredData(name);
}
function getStoredData(key) {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  } else {
    return null;
  }
}
function clearStorage() {
  localStorage.clear();
}
export { saveToken, saveUser, getToken, getUsername, clearStorage, saveToStorage, getStoredData };