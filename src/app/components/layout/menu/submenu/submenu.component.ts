import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  @Input() item: MenuItem;
  open = false;
  constructor() { }

  ngOnInit() {
  }

  toogle() {
    this.open = !this.open;
  }

}
