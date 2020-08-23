import { MenuItem } from './../../menu/menu-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-modulo-item',
  templateUrl: './menu-modulo-item.component.html',
  styleUrls: ['./menu-modulo-item.component.css']
})
export class MenuModuloItemComponent implements OnInit {

  @Input() item: MenuItem;
  constructor() { }

  ngOnInit() {
  }

}
