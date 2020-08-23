import { Component, OnInit, ContentChild, TemplateRef, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  @Input() name: string;
  @Input("hide-btn-filter") hideBtnFilter: boolean = false;
  @Input("acao-btn-novo") acaoBtnNovo: boolean = false;
  @Output("clicked-novo") clickerNovo: EventEmitter<boolean> = new EventEmitter;

  @ContentChild('filter', null) filter: TemplateRef<any>;
  @ContentChild('table', null) table: TemplateRef<any>;
  isShowFiltros = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  create() {
    this.clickerNovo.emit(true);
  }

}
