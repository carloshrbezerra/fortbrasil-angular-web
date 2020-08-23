export class ModuleItem {
    id: number;
    link: any[];
    icon: string;
    nome: string;
    descricao: string;

    static getModuleItem(): ModuleItem[] {
       return  [
            {
                id: 1 , link: ['/basico'], icon: 'fa fa-bar-chart', nome: 'Solicitação', descricao: 'Modulos de cadastro'
            },
            {
              id: 2 , link: ['/habitise'], icon: 'fa fa-cube', nome: 'HABITISE', descricao: 'Descrição do módulo'
            },
          ];
    }

}

