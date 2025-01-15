import { jwtDecode } from 'jwt-decode';

export interface JwtToken {
  sub: string;
  jti: string;
  userId: string;
  accountName: string;
  role: string;
  exp: number;
}

export class TokenUtility {
  static DecodeToken(token: string): JwtToken | null {
    try {
      return jwtDecode<JwtToken>(token);
    } catch (error) {
      console.error('Failed to decode token:', error);
      return null;
    }
  }

  static IsTokenExpired(token: string): boolean {
    const decoded = this.DecodeToken(token);
    if (!decoded) return true;

    const currentTime = Math.floor(Date.now() / 1000);
    return decoded.exp < currentTime;
  }
}
