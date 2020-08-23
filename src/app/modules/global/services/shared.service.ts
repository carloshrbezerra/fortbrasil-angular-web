import { Injectable, EventEmitter } from '@angular/core';
import { CurrentUser } from '../model/current-user.model';
import { Usuario } from '../../basico/domain/usuario.model';

@Injectable()
export class SharedService {
  public static instance: SharedService = null;
  private KEY_STORE_TOKEN = 'blank-st-auth-token';
  private KEY_STORE_USUARIO = 'blank-st-auth-user';
  usuario: Usuario;
  token: string;
  profile: string;
  showTemplate = new EventEmitter<boolean>();

  constructor() {
    return SharedService.instance = SharedService.instance || this;
  }

  public static getInstance() {
    if (this.instance === null) {
      this.instance = new SharedService();
      this.instance.token = JSON.parse(sessionStorage.getItem(this.instance.KEY_STORE_TOKEN));
      this.instance.usuario = JSON.parse(sessionStorage.getItem(this.instance.KEY_STORE_USUARIO));
      if (this.instance.usuario) {
        this.instance.showTemplate.emit(true);
      }
    }
    return this.instance;
  }

  isLoggedIn(): boolean {
    if (!this.token) {
      return false;
    }
    return this.token !== '';
    //return true;
  }

  logando(userAuthentication: CurrentUser) {
    this.token = userAuthentication.token;
    sessionStorage.setItem(this.KEY_STORE_TOKEN, JSON.stringify(this.token));
    this.usuario = userAuthentication.usuario;
    sessionStorage.setItem(this.KEY_STORE_USUARIO, JSON.stringify(this.usuario));
    this.showTemplate.emit(true);
  }

  logout() {
    this.token = null;
    sessionStorage.removeItem(this.KEY_STORE_TOKEN);
    this.usuario = null;
    sessionStorage.removeItem(this.KEY_STORE_USUARIO);
    this.showTemplate.emit(false);
  }

}
