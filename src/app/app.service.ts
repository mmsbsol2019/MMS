import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  onSynchCentral()
  {
    let configUrl = 'http://jsonplaceholder.typicode.com/users';
    return this.http.get(configUrl)

  } 

  onRetrieveVesselInfo()
  {
    let configUrl = 'http://localhost:8081/api/findAllVesselInfo';
    return this.http.get(configUrl)

  }

  onRetrieveUsers(param)
  {
    let configUrl = 'http://localhost:8081/api/findUsers';
    return this.http.post(configUrl,param)

  }

  constructor(private http:HttpClient) {
    
  }
   
}
