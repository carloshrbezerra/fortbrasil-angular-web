import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input('has-header') hasHeader: boolean = true;
  @Input() id: string;
  @Input() title: string;
  active = false;
  constructor(private _modal: ModalService) { }

  ngOnInit() {
    this._modal.modal.subscribe(md => {
      if (md.id === this.id || md.id === 'all') {
        if (md.acao === 'show') {
          this.active = true;
        } else {
          this.active = false;
        }
      }
    })
  }

  getDisplay(): string {
    return this.active ? 'block' : 'none';
  }

  close() {
    this.active = false;
  }

}
