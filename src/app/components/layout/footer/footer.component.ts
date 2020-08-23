import { Component, OnInit } from '@angular/core';
import { ModuleItem } from 'src/app/modules/global/model/module-item.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  moduleItem = ModuleItem.getModuleItem();

  constructor() { }

  ngOnInit() {
  }

}
