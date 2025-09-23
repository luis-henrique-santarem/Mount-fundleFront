export function addTokenToStorage(token) {
    localStorage.setItem("token", token)
}

export function getToken() {
  return  `bearer ${localStorage.getItem("token")}`
}