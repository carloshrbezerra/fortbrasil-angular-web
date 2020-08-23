import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-tb-column',
  templateUrl: './tb-column.component.html',
  styleUrls: ['./tb-column.component.css']
})
export class TbColumnComponent implements OnInit {

  @Input() campo: string;
  @Input() header: string;
  constructor() { }

  ngOnInit() {
  }

}
