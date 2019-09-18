import { Injectable } from '@angular/core';
import { MessageItem } from './message-type';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  currentMessage: MessageItem = null;

  constructor() {
    this.currentMessage = {
      messageType : "warning",
      messageDisplay : "I AM A SAMPLE MESSAGE "
    };
  }

  getCurrentMessage (){
    return this.currentMessage;
  }

  addMessage(newMessage: MessageItem){
    this.currentMessage = newMessage;
  }

  removeMessage(removeMessage: MessageItem){
    this.currentMessage = null;
  }
}
