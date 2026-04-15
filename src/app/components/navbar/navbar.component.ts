import { Component, inject, signal, HostListener } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private translationService = inject(TranslationService);
  
  // Signal para detectar si el usuario ha hecho scroll
  protected readonly isScrolled = signal(false);
  
  // Selector del idioma actual
  protected readonly currentLang = this.translationService.lang;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  setLang(lang: 'es' | 'en') {
    this.translationService.switchLanguage(lang);
  }
}
