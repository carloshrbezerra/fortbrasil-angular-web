import { Component, OnInit, ContentChild, Input, AfterContentChecked } from '@angular/core';
import { NgModel } from '@angular/forms';
import { InputDirective } from './input.directive';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, AfterContentChecked {

  @Input() label: string;
  // tslint:disable-next-line:no-input-rename
  @Input('icon-left-class') iconLeft: string;
  // tslint:disable-next-line:no-input-rename
  @Input('icon-right-class') iconRight: string;
  // tslint:disable-next-line:no-input-rename
  @Input('cols-class') cols = 'col-12';

  @ContentChild(NgModel, null) input: NgModel;

  @ContentChild(InputDirective, null) inputContent: InputDirective;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentChecked() {

  }

  private getError(error: string): string {
    switch (error) {
      case 'required':
        return 'Campo obrigatório';
      case 'maxLength':
        return 'Campo maior que o permitido';
      case 'minLength':
        return 'Campo menor que o permitido';
      case 'email':
        return 'Email inválido';
      case 'campoDiferente':
        return 'Campos diferentes';
      case 'cpfValidador':
        return 'CPF Inválido';
      case 'indisponivel':
        return 'Usuário indisponível';
      default:
        return 'Campo inválido';
    }
  }

  hasError(): boolean{
    this.inputContent.checarValidade();
    if ( this.input && this.input.touched && this.input.invalid){
      return true;
    } else {
      return false;
    }
  }

  getErrors(): string[] {
    const errors = [];
    if (this.hasError()) {
      Object.keys(this.input.errors).forEach(k => errors.push(this.getError(k)));
    }
    return errors;
  }

}
