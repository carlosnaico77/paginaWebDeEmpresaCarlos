import { Component, inject, signal, HostListener } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';
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
  private themeService = inject(ThemeService);
  
  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);
  
  protected readonly currentLang = this.translationService.lang;
  protected readonly currentTheme = this.themeService.currentTheme;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled.set(window.scrollY > 50);
  }

  setLang(lang: 'es' | 'en') {
    this.translationService.switchLanguage(lang);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggleMenu() {
    this.isMenuOpen.update(val => !val);
  }
}
