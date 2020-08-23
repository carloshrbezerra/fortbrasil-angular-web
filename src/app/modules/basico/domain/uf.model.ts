import { Resource } from '../../global/model/resource.model';
import { Municipio } from './municipio.model';

export class UF extends Resource {

    public nome: string;
    public sigla: string;
    public municipios: Municipio[];

    constructor() {
        super();
    }
}
