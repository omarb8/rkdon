import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareddataService {

  private messageSource = new BehaviorSubject('portefeuille');
  currentMessage = this.messageSource.asObservable();

  private idSource = new BehaviorSubject('');
  currentid = this.idSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
  changeid(id: string) {
    this.idSource.next(id)
  }
}
