import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})
export class PricingComponent {
  plans = [
    { id: 'P1', featured: false },
    { id: 'P2', featured: true },
    { id: 'P3', featured: false }
  ];
}
