import { Usuario } from '../domain/usuario.model';

export class UsuarioSerializer {
  fromJson(json: any): Usuario {
    const usuario = new Usuario();
    Object.keys(json).forEach(k => usuario[k] = json[k]);
    return usuario;
  }

  toJson(usuario: Usuario): any {
    const json: any = {};
    Object.keys(usuario).forEach(k => json[k] = usuario[k]);
    return json;
  }
}
