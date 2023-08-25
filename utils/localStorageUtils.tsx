export function getLocalStorage(key: string): any {
  const data: string | null = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export function setLocalStorage(key: string, data: any): void {
  localStorage.setItem(key, JSON.stringify(data));
}

export function removeLocalStorage(key: string): void {
  localStorage.removeItem(key);
}

export function clearLocalStorage(): void {
  localStorage.clear();
}
