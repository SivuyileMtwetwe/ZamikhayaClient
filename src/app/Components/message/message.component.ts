// import { Component } from '@angular/core';

// interface Message {
//   text: string;
//   timestamp: string;
// }

// @Component({
//   selector: 'app-message',
//   templateUrl: './message.component.html',
//   styleUrls: ['./message.component.css']
// })
// export class MessageComponent {
//   receiverName: string = 'Landlord';
//   receiverPicture: string = 'https://fivestarmarketing.com.pk/wp-content/uploads/2023/03/Good-Landlord.jpg';
//   messageText: string = '';
//   messages: Message[] = [];

//   sendMessage() {
//     if (this.messageText.trim()) {
//       const currentTime = new Date();
//       const timestamp = `${currentTime.toLocaleDateString()} ${currentTime.toLocaleTimeString()}`;
//       this.messages.push({ text: this.messageText, timestamp });
//       this.messageText = '';
//     }
//   }
// }

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
  receiverPicture: string = 'https://fivestarmarketing.com.pk/wp-content/uploads/2023/03/Good-Landlord.jpg';
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

