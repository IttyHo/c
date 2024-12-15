import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  currentLang: string;

  constructor(private translate: TranslateService) {
    // אתחול ברירת המחדל לשפה
    this.translate.setDefaultLang('en');
  }

  setLanguage(language: string) {
    this.translate.use(language);
    this.currentLang = language;

  }
}