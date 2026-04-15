import { Component, signal } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-chat-bubble',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './chat-bubble.component.html',
  styleUrl: './chat-bubble.component.css'
})
export class ChatBubbleComponent {
  // Signal para controlar la apertura del chat
  protected isOpen = signal(false);

  toggleChat() {
    this.isOpen.set(!this.isOpen());
  }

  sendMessage(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.value.trim()) {
      alert('Mensaje enviado: ' + input.value);
      input.value = '';
    }
  }
}
