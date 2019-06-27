import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loggedInSource = new BehaviorSubject('');
  private loggedInSourceId = new BehaviorSubject('');
  currentUser = this.loggedInSource.asObservable();
  currentUserId=this.loggedInSourceId.asObservable();

  constructor() { }

  loggedInUser(loggedInUser: string,loggedInUserId: string) {
    this.loggedInSource.next(loggedInUser)
    this.loggedInSourceId.next(loggedInUserId)
   

  }
}
