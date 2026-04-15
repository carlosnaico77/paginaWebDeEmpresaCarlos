import { Component, signal } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  // Signal para rastrear qué FAQ está abierta
  protected activeFaq = signal<string | null>(null);

  faqs = [
    { id: 'Q1', answerId: 'A1' },
    { id: 'Q2', answerId: 'A2' }
  ];

  toggleFaq(id: string) {
    this.activeFaq.set(this.activeFaq() === id ? null : id);
  }
}
