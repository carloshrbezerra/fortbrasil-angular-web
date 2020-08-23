import { Component, OnInit, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-tb-actions',
  templateUrl: './tb-actions.component.html',
  styleUrls: ['./tb-actions.component.css']
})
export class TbActionsComponent implements OnInit {

  @Input() header: string;
  @Input() obj: any;
  @Input() var: string;
  @ContentChild(TemplateRef, null) tempalte: TemplateRef<any>;
  constructor() { }

  ngOnInit() {
  }

}
