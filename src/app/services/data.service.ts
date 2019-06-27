import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AbstractClassPart } from '@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  setupUserToLogin: string;
  selecedUsers: any;
  userVariable:any;
  previousUservarible:any;
 

  private messageSource = new BehaviorSubject('');
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  storage(setupUserToLogin) {
    this.selecedUsers = setupUserToLogin;
  }
  storageForPreviousUser(previousUservarible){
    this.userVariable=previousUservarible;
  }
  

}
