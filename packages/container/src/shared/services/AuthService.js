export class AuthService {
  static instance;
  isAuth = false;
  subscribers = [];
  constructor() {
    if (AuthService.instance) {
      return AuthService.instance;
    }
    AuthService.instance = this;
  }
  setAuth = (bool) => {
    this.isAuth = bool;
    this.notifySubscribers();
  };
  subscribe = (func) => {
    this.subscribers.push(func);
  };
  notifySubscribers = () => {
    this.subscribers.forEach((el) => el(this.isAuth));
  };
}
