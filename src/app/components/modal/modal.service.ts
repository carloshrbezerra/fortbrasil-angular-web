import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ModalService {

  modal: EventEmitter<any> = new EventEmitter();
  constructor() { }

  show(id: string) {
    this.modal.emit({ acao: 'show', id: id });
  }

  hide(id: string) {
    this.modal.emit({ acao: 'hide', id: id });
  }

  hideAll() {
    this.hide('all');
  }

}
