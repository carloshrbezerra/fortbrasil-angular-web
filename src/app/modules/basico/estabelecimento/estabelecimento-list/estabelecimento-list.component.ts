import { EstabelecimentoService } from './../../services/estabelecimento.service';
import { Estabelecimento } from '../../domain/estabelecimento.model';
import { CardListComponent } from '../../../../components/card-list/card-list.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Table } from 'primeng/table';
import { QueryOptions } from 'src/app/modules/global/model/query.options';
import { MessageService } from 'src/app/components/message/message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DepartamentoRegional } from '../../domain/departamento-regional.model';
import { SharedService } from 'src/app/modules/global/services/shared.service';
import { Profile } from '../../domain/profile';

@Component({
  selector: 'app-estabelecimento-list',
  templateUrl: './estabelecimento-list.component.html',
  styleUrls: ['./estabelecimento-list.component.scss']
})
export class EstabelecimentoListComponent implements OnInit {

  @ViewChild('searchForm', null) searchForm: NgForm;
  @ViewChild('dataTable', null) dataTable: Table;
  @ViewChild(CardListComponent, null) cardList: CardListComponent;
  first = 0;
  loading = false;
  totalRecords: number;
  estabelecimentos: Estabelecimento[] = [];
  departamento: DepartamentoRegional;
  departamentos: DepartamentoRegional[] = [];
  queryOptions = new QueryOptions();

  constructor(private estabelecimentoService: EstabelecimentoService,
    private messageService: MessageService
    protected router: Router,
    protected route: ActivatedRoute,
    private shared: SharedService
  ) { }

  ngOnInit() {
    this.list();
  }

  list() {
    this.loading = true;
    this.estabelecimentoService.list(this.queryOptions).subscribe((data) => {
      this.estabelecimentos = data.data;
      this.totalRecords = data.meta.total;
      this.loading = false;
    });
  }

  buscar(form: NgForm) {


    let localizacao = form.get('localizacao').value;

    this.estabelecimentoService.buscarPorLocalizacao(localizacao).subscribe((data) => {
      this.estabelecimentos = data.data;
      this.totalRecords = data.meta.total;
      this.loading = false;
    });
  }

  consultar(form: NgForm) {
    this.queryOptions.search = `nome=${form.value.nome}`;
    this.queryOptions.search = this.departamento ? `${this.queryOptions.search}&departamento=${this.departamento.id}`: this.queryOptions.search;
    this.list();
  }

  limpar() {
    this.loading = true;
    this.searchForm.reset();
    this.dataTable.reset();
    this.queryOptions = new QueryOptions();
    if(this.isUser){
      this.queryOptions.search = `localizacao=${this.departamento.localizacao}`;
    }
    this.list();
  }

  remover(estabelecimento) {
    this.estabelecimentoService.delete(estabelecimento).subscribe(() => this.list());
    this.messageService.messageSuccess('Remoção realizada com sucesso');
  }

  paginarList(event: any) {
    this.loading = true;
    //console.log(event);
    this.queryOptions.pageNumber = (event.first / event.rows)+1;
    this.queryOptions.pageSize = event.rows;
    if (this.cardList.isShowFiltros) {
      this.consultar(this.searchForm);
    } else {
      this.list();
    }
  }

  get isUser():boolean{
    return Profile[this.shared.usuario.profile] == Profile.USER;
  }

}
