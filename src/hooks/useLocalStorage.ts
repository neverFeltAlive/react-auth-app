export function useLocalStorage() {
  const get = (key: string) =>
    JSON.parse(localStorage.getItem(key) || '') || null;

  const set = (key: string, value: object | number | string) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [get, set] as [typeof get, typeof set];
}
