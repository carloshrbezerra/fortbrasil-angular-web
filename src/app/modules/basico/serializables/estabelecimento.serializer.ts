import { Estabelecimento } from './../domain/estabelecimento.model';

export class EstabelecimeoSerializer  {


  fromJson(json: any): Estabelecimento {
    const usuario = new Estabelecimento();
    Object.keys(json).forEach(k => usuario[k] = json[k]);
    return usuario;
  }

  toJson(usuario: Estabelecimento): any {
    const json: any = {};
    Object.keys(usuario).forEach(k => json[k] = usuario[k]);
    return json;
  }
}
