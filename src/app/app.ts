import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProblemsComponent } from './components/problems/problems.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesDetailComponent } from './components/services-detail/services-detail.component';
import { PromotionsComponent } from './components/promotions/promotions.component';
import { WhatIncludedComponent } from './components/what-included/what-included.component';
import { MapsLossComponent } from './components/maps-loss/maps-loss.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { FaqComponent } from './components/faq/faq.component';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatBubbleComponent } from './components/chat-bubble/chat-bubble.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProblemsComponent,
    BenefitsComponent,
    ServicesComponent,
    ServicesDetailComponent,
    PromotionsComponent,
    WhatIncludedComponent,
    MapsLossComponent,
    PortfolioComponent,
    PricingComponent,
    ReviewsComponent,
    FaqComponent,
    OrderFormComponent,
    ContactComponent,
    FooterComponent,
    ChatBubbleComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Digital Agency | Soluciones Digitales');
}
