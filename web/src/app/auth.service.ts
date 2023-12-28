import {Injectable} from '@angular/core';

const token = "token";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {

  }

  isLoggedIn() {
    return AuthService.getToken() != null;
  }

  static getToken() {
    return localStorage.getItem(token);
  }

  setToken(accessToken: string) {
    localStorage.setItem(token, accessToken);
  }
}
