import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      title: 'SERVICES.CARD_WEB.TITLE',
      description: 'SERVICES.CARD_WEB.DESC',
      color: 'var(--primary)',
      features: ['SERVICES.CARD_WEB.F1', 'SERVICES.CARD_WEB.F2', 'SERVICES.CARD_WEB.F3']
    },
    {
      title: 'SERVICES.CARD_ECOMMERCE.TITLE',
      description: 'SERVICES.CARD_ECOMMERCE.DESC',
      color: 'var(--secondary)',
      features: ['SERVICES.CARD_ECOMMERCE.F1', 'SERVICES.CARD_ECOMMERCE.F2', 'SERVICES.CARD_ECOMMERCE.F3']
    },
    {
      title: 'SERVICES.CARD_SOFTWARE.TITLE',
      description: 'SERVICES.CARD_SOFTWARE.DESC',
      color: 'var(--accent)',
      features: ['SERVICES.CARD_SOFTWARE.F1', 'SERVICES.CARD_SOFTWARE.F2', 'SERVICES.CARD_SOFTWARE.F3']
    },
    {
      title: 'SERVICES.CARD_APPS.TITLE',
      description: 'SERVICES.CARD_APPS.DESC',
      color: '#fbbf24',
      features: ['SERVICES.CARD_APPS.F1', 'SERVICES.CARD_APPS.F2', 'SERVICES.CARD_APPS.F3']
    }
  ];
}
