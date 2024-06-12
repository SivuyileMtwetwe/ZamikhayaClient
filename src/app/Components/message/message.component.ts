import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  senderName: string = 'John Doe';
  senderPicture: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOYV3Los6QjSxSDPvlF51vupM-y3Xp0P-fqLTqnQWoRGPCcsECwdkh6XSJ1soYetHi0IQ&usqp=CAU';
  messageText: string = '';
  messages: string[] = [];
sender: any;
send: any;

  sendMessage() {
    if (this.messageText.trim()) {
      this.messages.push(this.messageText);
      this.messageText = '';
    }
  }
}

