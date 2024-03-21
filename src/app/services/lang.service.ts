import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor() { }

  public currentLanguageSubject:BehaviorSubject<string> = new BehaviorSubject<string>('en');
  currentLanguage$ = this.currentLanguageSubject.asObservable();
  
  changeLanguage(language: string) {
    this.currentLanguageSubject.next(language);
  }
}
