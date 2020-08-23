import { Component, OnInit, Input, AfterContentInit, ContentChild,
    ViewContainerRef, TemplateRef, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentInit {

  // tslint:disable-next-line:no-output-rename
  @Output('page-selected') pageSelected: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:no-input-rename
  @Input('align-paginator-class') alingPaginator = 'justify-content-center';
  // tslint:disable-next-line:no-input-rename
  @Input('size-paginator-class') sizePaginator = '';
  @Input() lista: any[] = [];
  @ContentChild('header', null) header: TemplateRef<any>;
  @ContentChild('body', null) body: TemplateRef<any>;
  @Input() pagination = false;
  // tslint:disable-next-line:no-input-rename
  @Input('rows-count') rowsCount: number;
  // tslint:disable-next-line:no-input-rename
  @Input('rows') rows: number;
  headers: string[] = [];
  campos: string[] = [];
  asc = true;
  headerAction: string;
  countPages: number;
  offsets: number[] = [];
  page = 1;
  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    if (this.pagination) {
      this.countPages = this.rowsCount / this.rows;
      for (let i = 0; i < this.countPages; i++) {
        this.offsets.push(i * this.rows);
      }
    }
  }


  isPrevious(): boolean {
    // tslint:disable-next-line:triple-equals
    return this.page != 1;
  }

  isNext(): boolean {
    // tslint:disable-next-line:triple-equals
    return this.page != this.offsets.length;
  }

  isAtiva(page: number): boolean {
    // tslint:disable-next-line:triple-equals
    return this.page == page;
  }

  setPage(n: number) {
    this.page = n;
    this.pageSelected.emit({page : n , limit: this.rows});
  }
}
