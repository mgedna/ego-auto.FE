import { JwtToken } from "./JwtHelper";

export default class StorageHelper {
  static SetToken(token: string): void {
    localStorage.setItem("authToken", token);
  }

  static GetToken(): string | null {
    return localStorage.getItem("authToken");
  }

  static RemoveToken(): void {
    localStorage.removeItem("authToken");
  }

  static SetUser(userData?: JwtToken | null): void {
    if (userData) {
      const serializedData = JSON.stringify(userData);
      localStorage.setItem("userData", serializedData);
    }
  }

  static SetRole(role?: string | null) : void {
    localStorage.setItem("userRole", role ?? 'Guest');
  }

  static GetRole(): string | null {
    return localStorage.getItem("userRole");
  }

  static SetUsername(username?: string | null) : void {
    localStorage.setItem("username", username ?? 'Guest');
  }

  static SetUserId(userId?: string | null) : void {
    localStorage.setItem("userId", userId ?? 'Guest');
  }

  static GetUser(): Record<string, any> | null {
    const userData = localStorage.getItem("userData");
    return userData ? JSON.parse(userData) : null;
  }

  static RemoveUser(): void {
    localStorage.removeItem("userData");
  }
}
