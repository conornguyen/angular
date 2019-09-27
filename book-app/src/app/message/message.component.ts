import { Component, OnInit } from '@angular/core';
import { MessageItem } from './message-type';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  currentMessage: MessageItem = null;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.loadCurrentMessage();
  }

  loadCurrentMessage(){
    this.currentMessage = this.messageService.getCurrentMessage();

  }
  removeMessage(){
    this.messageService.removeMessage(this.currentMessage);
    this.loadCurrentMessage();
  }
}


