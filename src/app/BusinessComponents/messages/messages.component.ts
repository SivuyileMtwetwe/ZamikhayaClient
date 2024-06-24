import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../Services/chat.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: any[] = [];
  newMessage: string = '';
  currentUser: string = 'Customer'; // or 'Business', depending on the user
  currentUserAvatar: string = 'https://via.placeholder.com/40'; // Placeholder avatar URL
  predefinedMessages: string[] = [
    'Can you provide more details about the property?',
    'Is the price negotiable?',
    'What are the available dates for viewing?',
    'Can you send more pictures of the property?',
    'What are the terms of the lease?'
  ];

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.chatService.getMessages().subscribe((messages) => {
      this.messages = messages;
    });
  }

  sendMessage(message?: string) {
    const content = message || this.newMessage;
    if (content.trim()) {
      this.chatService.sendMessage(this.currentUser, content, this.currentUserAvatar);
      this.newMessage = '';
    }
  }
}
