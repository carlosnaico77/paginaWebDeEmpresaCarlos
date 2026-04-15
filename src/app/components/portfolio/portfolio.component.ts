import { Component } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects = [
    {
      title: 'PORTFOLIO.PROJECTS.P1.TITLE',
      category: 'PORTFOLIO.PROJECTS.P1.CAT',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'PORTFOLIO.PROJECTS.P2.TITLE',
      category: 'PORTFOLIO.PROJECTS.P2.CAT',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'PORTFOLIO.PROJECTS.P3.TITLE',
      category: 'PORTFOLIO.PROJECTS.P3.CAT',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];
}
