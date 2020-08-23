import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu/menu-item';
import { ModuleItem } from 'src/app/modules/global/model/module-item.model';
import { SharedService } from 'src/app/modules/global/services/shared.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css']
})
export class ModuleComponent implements OnInit {

  moduleItem = ModuleItem.getModuleItem();

  constructor(private sharedService: SharedService) {
    this.sharedService.showTemplate.emit(false);
  }

  ngOnInit() {}

}
