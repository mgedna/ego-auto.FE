import { JwtToken } from "./JwtHelper";

export default class StorageHelper {
  static SetToken(token: string, days: number = 7): void {
    const expires = this.GetExpirationDate(days);
    document.cookie = `authToken=${token}; ${expires}; path=/`;
  }

  static GetToken(): string | null {
    const match = document.cookie.match(/(^|;) ?authToken=([^;]*)(;|$)/);
    return match ? match[2] : null;
  }

  static RemoveToken(): void {
    document.cookie = `authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  static SetUser(userData?: JwtToken | null, days: number = 7): void {
    if(userData) {
      const expires = this.GetExpirationDate(days);
      const serializedData = JSON.stringify(userData);
      const encodedData = encodeURIComponent(serializedData);
      document.cookie = `userData=${encodedData}; ${expires}; path=/`;
    }
 }

  static GetUser(): Record<string, any> | null {
    const match = document.cookie.match(/(^|;) ?userData=([^;]*)(;|$)/);
    return match ? JSON.parse(decodeURIComponent(match[2])) : null;
  }

  static RemoveUser(): void {
    document.cookie = `userData=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }

  private static GetExpirationDate(days: number): string {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    return `expires=${date.toUTCString()}`;
  }
}
