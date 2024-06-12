import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  senderName: string = 'Tenant';
  senderPicture: string = 'https://via.placeholder.com/40';
  receiverName: string = 'Landlord';
  receiverPicture: string = 'https://via.placeholder.com/40';
  messageText: string = '';
  messages: string[] = [];

  sendMessage() {
    if (this.messageText.trim()) {
      this.messages.push(`${this.senderName}: ${this.messageText}`);
      this.messageText = '';
    }
  }
}


