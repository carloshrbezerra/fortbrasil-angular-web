import { Resource } from '../../global/model/resource.model';
export class Estabelecimento extends Resource {
    ativo: boolean = true;
    localizacao: string;
    dataAbertura: Date;
    email: string;
    nome: string;
    nome_fantasia: string;
    telefone: string;
    atividade: string;
}
