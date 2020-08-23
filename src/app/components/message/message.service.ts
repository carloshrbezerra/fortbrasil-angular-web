import { Injectable, EventEmitter } from '@angular/core';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  event: EventEmitter<Message> = new EventEmitter();
  constructor() { }

  messageErro(mensagem: string, titulo: string = 'Erro!') {
    this.message('alert-danger', 'icon fa fa-ban', titulo, mensagem);
  }

  messageWarning(mensagem: string, titulo: string = 'Atenção!') {
    this.message('alert-warning', 'icon fa fa-warning', titulo, mensagem);
  }

  messageSuccess(mensagem: string, titulo: string = 'Ok!') {
    this.message('alert-success', 'icon fa fa-check', titulo, mensagem);
  }

  messageInfo(mensagem: string, titulo: string = 'Informação!') {
    this.message('alert-info', 'icon fa fa-info', titulo, mensagem);
  }

  message(tipo: string, icon: string, titulo: string, mensagem: string) {
    this.event.emit({tipo, icon, titulo: titulo, mensagem: mensagem});
  }
}
