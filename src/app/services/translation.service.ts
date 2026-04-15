import { Injectable, signal, computed } from '@angular/core';
import { TRANSLATIONS } from '../i18n/translations';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  // Signal para el idioma actual, por defecto 'es'
  private currentLang = signal<'es' | 'en'>('es');

  // Selector para obtener el idioma actual
  lang = this.currentLang.asReadonly();

  // Selector computado para obtener los datos de traducción del idioma actual
  data = computed(() => TRANSLATIONS[this.currentLang()]);

  // Cambiar el idioma
  switchLanguage(lang: 'es' | 'en') {
    this.currentLang.set(lang);
  }

  // Método helper para traducir claves anidadas (ej: 'NAV.HOME')
  translate(key: string): string {
    const keys = key.split('.');
    let value: any = this.data();
    
    for (const k of keys) {
      if (value && value[k]) {
        value = value[k];
      } else {
        return key; // Si no encuentra la clave, devuelve la clave misma
      }
    }
    
    return value;
  }
}
