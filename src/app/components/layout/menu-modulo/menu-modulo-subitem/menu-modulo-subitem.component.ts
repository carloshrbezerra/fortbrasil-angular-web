import { MenuItem } from './../../menu/menu-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-modulo-subitem',
  templateUrl: './menu-modulo-subitem.component.html',
  styleUrls: ['./menu-modulo-subitem.component.css']
})
export class MenuModuloSubitemComponent implements OnInit {

  @Input() menu: MenuItem;
  constructor() { }

  ngOnInit() {
  }

}
