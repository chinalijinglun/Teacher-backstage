function setLocalStorage(key, value) {
  if(value === null || value === undefined) {
    return localStorage.removeItem(key);
  }
  return localStorage.setItem(key, value);
}

function getLocalStorage(key) {
  return localStorage.getItem(key);
}

function deleteLocalStorage(key) {
  return localStorage.removeItem(key);
}

export {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage
}
