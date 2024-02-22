export function getLocalStorageSeed() {
  return localStorage.getItem("seed")
}

export function setLocalStorageSeed(seed: string) {
  localStorage.setItem("seed", seed)
}

export function clearLocalStorageSeed() {
  localStorage.removeItem("seed")
}
