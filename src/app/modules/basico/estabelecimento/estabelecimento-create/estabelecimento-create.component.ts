import { ModalService } from '../../../../components/modal/modal.service';
import { Profile } from '../../domain/profile';

import { EstabelecimentoService } from '../../services/estabelecimento.service';
import { Estabelecimento } from '../../domain/estabelecimento.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/components/message/message.service';
import { SharedService } from 'src/app/modules/global/services/shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-estabelecimento-create',
  templateUrl: './estabelecimento-create.component.html',
  styleUrls: ['./estabelecimento-create.component.scss']
})
export class EstabelecimentoCreateComponent implements OnInit {

  @ViewChild(NgForm, null) form: NgForm;
  estabelecimento = new Estabelecimento();


  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private shared: SharedService,
    private modal: ModalService
  ) { }

  ngOnInit() {
    let id = this.route.params.subscribe(params => {
    let id = this.route.snapshot.params.id;
      if (id) {
        this.estabelecimentoService.read(+id)
        .subscribe(estabelecimento => {
          this.estabelecimento = estabelecimento;

        });
      }
    });
  }

  save() {
    if (this.form.valid) {
      this.estabelecimentoService.createOrUpdate(this.estabelecimento).subscribe(data => {
        this.snackbar.open('Operação realizada com sucesso!','OK',{
          duration: 10000
        });
        this.clear();
        this.search();
      }, err => this.snackbar.open('Ocorreu um erro ao inserir!','OK',{
        duration: 10000
      }));
    } else {
      Object.keys(this.form.controls).forEach(k => this.form.controls[k].markAsTouched());
    }
  }

  clear() {
    this.form.resetForm();
  }

  buscarLoclizacao(){

      this.estabelecimentoService.buscarPorLocalizacao(this.estabelecimento).subscribe(data => {
        this.estabelecimento =  this.estabelecimento;
      });

  }

  search() {
    this.router.navigate(['/basico/estabelecimento']);
  }

  compare(obj1: any, obj2: any): boolean {
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 === obj2;
  }

  get isUser():boolean{
    return Profile[this.shared.usuario.profile] == Profile.USER;
  }

  show(id){
    this.modal.show(id);
  }


}
