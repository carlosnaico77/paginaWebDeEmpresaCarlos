import { Injectable, signal, effect, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private theme = signal<'dark' | 'light'>('dark'); // Valor por defecto seguro para el servidor

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    // 1. Solo intentamos leer localStorage si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
      if (savedTheme) {
        this.theme.set(savedTheme);
      }
    }

    // 2. El efecto también debe ser cuidadoso con document y localStorage
    effect(() => {
      const currentTheme = this.theme();
      
      if (isPlatformBrowser(this.platformId)) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        localStorage.setItem('theme', currentTheme);
      }
    });
  }

  get currentTheme() {
    return this.theme.asReadonly();
  }

  toggleTheme() {
    this.theme.update(t => t === 'dark' ? 'light' : 'dark');
  }

  setTheme(t: 'dark' | 'light') {
    this.theme.set(t);
  }
}