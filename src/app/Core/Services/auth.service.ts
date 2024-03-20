import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private isLoggedIn : boolean
  constructor() { }

  login() {
    this.isLoggedIn = true
  }

  logout() {
    this.isLoggedIn = false
  }

  getLoginState() {
    return this.isLoggedIn
  }
}
