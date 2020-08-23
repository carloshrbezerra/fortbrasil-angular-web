import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tools-actions',
  templateUrl: './tools-actions.component.html'
})
export class ToolsActionsComponent implements OnInit {

  // tslint:disable-next-line:no-output-rename
  @Output('save-action') saveAction: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-rename
  @Output('clear-action') clearAction: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-output-rename
  @Output('search-action') searchAction: EventEmitter<any> = new EventEmitter();

  @Input('disabled-clear') disabledClear: false;
  @Input('disabled-search') disabledSearch: false;

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.saveAction.emit();
  }

  clear() {
    this.clearAction.emit();
  }

  search() {
    this.searchAction.emit();
  }

}
