import { MenuItem } from './../../menu/menu-item';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-modulo-subitem2',
  templateUrl: './menu-modulo-subitem2.component.html',
  styleUrls: ['./menu-modulo-subitem2.component.css']
})
export class MenuModuloSubitem2Component implements OnInit {

  @Input() menu: MenuItem;
  show:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  mostrar(){
    this.show = true;
  }

  esconder(){
    this.show = false;
  }

}
