import { Component } from '@angular/core';
import {Component} from 'MessageComponents'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})

export class MessageComponent {""},
  senderName: string = 'Tenant';
  senderPicture: string = 'https://via.placeholder.com/40';
  receiverName: string = 'Landlord';
  receiverPicture: string = 'https://www.avail.co/wp-content/uploads/2019/08/15-Ways-You-Can-Be-An-Awesome-Landlord.jpg';
  messageText: string = '';
  messages: string[] = [];

  sendMessage() {
    if (this.messageText.trim()) {
      this.messages.push(`${this.senderName}: ${this.messageText}`);
      this.messageText = '';
    }
  }
}


