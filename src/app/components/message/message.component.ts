import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Message } from './message';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy {

  @Input() message: Message; 
  active:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  close(){
    this.active = false;
  }

  ngOnDestroy(){
    this.active = false;
  }

}
