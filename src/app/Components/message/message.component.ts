import { Component } from '@angular/core';

interface Message {
  text: string;
  timestamp: string;
}

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  receiverName: string = 'Landlord';
  receiverPicture: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0I1onILjyhCzEoztkAto-unTzyYQ_tsyaxA&s';
  messageText: string = '';
  messages: Message[] = [];
  isMinimized: boolean = true;

  sendMessage() {
    if (this.messageText.trim()) {
      const currentTime = new Date();
      const timestamp = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
      this.messages.push({ text: this.messageText, timestamp });
      this.messageText = '';
    }
  }

  toggleMinimize() {
    this.isMinimized = !this.isMinimized;
  }
}
