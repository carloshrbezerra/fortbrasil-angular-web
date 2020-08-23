import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Resource } from 'src/app/modules/global/model/resource.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-table-actions',
  templateUrl: './table-actions.component.html',
  styleUrls: ['./table-actions.component.css']
})
export class TableActionsComponent implements OnInit {

  @Input() domain: Resource;
  // tslint:disable-next-line:no-input-rename
  @Input('edit-enabled') editEnabled = true;
  // tslint:disable-next-line:no-input-rename
  @Input('detail-enabled') detailEnabled = true;
  // tslint:disable-next-line:no-input-rename
  @Input('remove-enabled') removeEnabled = true;
  @Output() removeEvent = new EventEmitter();

  pathDetail: string;
  pathEdit: string;

  constructor() { }

  ngOnInit() {
  }

  remover() {
    this.removeEvent.emit(this.domain);
  }

}
