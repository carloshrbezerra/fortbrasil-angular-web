import { Component, OnInit, OnDestroy } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';
import { timer } from 'rxjs'

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.css']
})
export class MessageContainerComponent implements OnInit, OnDestroy {

  lista: Message[] = [];
  constructor(private eventMessage: MessageService) { }
  ngOnInit() {
    this.eventMessage.event.subscribe(message => {
      window.scrollTo(0, 0);
      this.lista.push(message);
      timer(5000).subscribe(t => this.lista.shift())
    });
  }

  ngOnDestroy(){
    this.eventMessage.event.unsubscribe();
  }


}
