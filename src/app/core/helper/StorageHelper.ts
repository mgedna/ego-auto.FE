class StorageHelper {
  static setToken(token: string, days: number): void {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `authToken=${token}; ${expires}; path=/`;
  }

  static getToken(): string | null {
    const nameEQ = `authToken=`;
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.startsWith(nameEQ)) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }

  static deleteToken(): void {
    document.cookie = `authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`;
  }
}

export default StorageHelper;
