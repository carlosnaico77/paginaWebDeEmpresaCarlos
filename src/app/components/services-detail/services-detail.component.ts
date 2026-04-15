import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-services-detail',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './services-detail.component.html',
  styleUrl: './services-detail.component.css'
})
export class ServicesDetailComponent {
  detailedServices = [
    { id: 'LANDING', color: 'var(--primary)' },
    { id: 'MULTI', color: 'var(--secondary)' },
    { id: 'ECOM', color: 'var(--accent)' },
    { id: 'SOFT', color: '#8b5cf6' },
    { id: 'CHAT', color: '#10b981' },
    { id: 'APPS', color: '#f59e0b' },
    { id: 'MAPS', color: '#ef4444' }
  ];
}
