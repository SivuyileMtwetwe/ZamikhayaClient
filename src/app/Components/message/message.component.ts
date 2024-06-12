// src/app/message/message.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() message: string | undefined;
  @Input() type: 'success' | 'error' | 'info' = 'info';  // default type

  get cssClass(): string {
    return `message ${this.type}`;
  }
}
