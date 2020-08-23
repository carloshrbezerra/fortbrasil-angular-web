import { MenuItem } from './menu-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: MenuItem[] = [
    {
      link: [], icon: 'fa fa-edit', nome: 'Usuário', menuItens: [
        { link: ['/usuario/create'], icon: 'fas fa-plus-circle', nome: 'Cadastrar' },
        { link: ['/usuario'], icon: 'fas fa-clock-o', nome: 'Pesquisar' }
      ]
    },
    {
      link: [], icon: 'fa fa-edit', nome: 'Orgão', menuItens: [
        { link: ['/orgao/create'], icon: 'fas fa-plus-circle', nome: 'Cadastrar' },
        { link: ['/orgao'], icon: 'fas fa-clock-o', nome: 'Pesquisar' }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
