import { Usuario } from '../../basico/domain/usuario.model';

export class CurrentUser {
  constructor(public usuario: Usuario, public token: string) {}
}
