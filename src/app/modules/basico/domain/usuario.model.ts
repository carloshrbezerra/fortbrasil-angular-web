import { Resource } from '../../global/model/resource.model';
import { Perfil } from './perfil.model';
import { Representante } from './representante.model';
import { DepartamentoRegional } from './departamento-regional.model';

export class Usuario extends Resource {

  public nome: string;
  public email: string;
  public password: string;
  public profile: string = 'USER';
  public perfil: Perfil;
  public representante: Representante;
  public departamento_regional: DepartamentoRegional;
  public version = 0;

  constructor() {
    super();
  }
}
