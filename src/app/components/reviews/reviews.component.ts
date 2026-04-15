import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  clientReviews = [
    { id: 'R1' },
    { id: 'R2' }
  ];
}
