import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Message {
  sender: string;
  content: string;
  timestamp: Date;
  senderAvatar: string;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private messages: Message[] = [];
  private messagesSubject = new BehaviorSubject<Message[]>(this.messages);

  getMessages() {
    return this.messagesSubject.asObservable();
  }

  sendMessage(sender: string, content: string, senderAvatar: string) {
    const message: Message = { sender, content, timestamp: new Date(), senderAvatar };
    this.messages.push(message);
    this.messagesSubject.next(this.messages);
  }
}
