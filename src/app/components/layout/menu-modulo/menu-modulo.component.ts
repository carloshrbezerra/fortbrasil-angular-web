import { MenuItem } from './../menu/menu-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-modulo',
  templateUrl: './menu-modulo.component.html',
  styleUrls: ['./menu-modulo.component.css']
})
export class MenuModuloComponent implements OnInit {

  @Input() modulo;
  @Input() menu: MenuItem[] = [];
  constructor() { }

  ngOnInit() {
  }

}
