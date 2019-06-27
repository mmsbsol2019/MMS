import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from "../login.service";
import { IpcCal } from "../ipcCall"

import { ToastrService } from 'ngx-toastr';

var CONST = require('../../../DBConnection/constants');
import CONST from 'DBConnection/constants';
import { from } from 'rxjs';
import { AppService } from '../app.service';
import { SetData } from '../setData';
//var CONST = require('../../../DBConnection/constants');


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggedInUser: string;
  userDetails: any = {};
  loginForm = new FormGroup({
    userName: new FormControl(''),
    passWord: new FormControl(''),
  });

  onSubmit() {


    var param = [1, this.loginForm.value.userName, this.loginForm.value.passWord];
    // param.push(this.loginForm.value.userName)
    // param.push(this.loginForm.value.passWord)
    this.ipc.loginValidation(param).then((value) => {
      console.log(value)
      if (this.loginForm.valid) {
        if (value == 'true') {
          var param2 = [1, this.loginForm.value.userName];
          this.ipc.userDetails(param2).then((value) => {
            console.log(value)
            this.userDetails = value;
            this.login.loggedInUser(this.userDetails.FIRST_NAME + ' ' + this.userDetails.LAST_NAME, this.userDetails.USER_ID)
          })
          this.router.navigate(['/dashboard']);
          // let a = this.ser.onRetrieveVesselInfo();
          // a.subscribe(res => {
          //   this.setData.onSetRetrievedVesselInfo(res).then((value) => {
          //     this.ipc.onRetrieveAndSaveVesselInfo(value).then((value) => {

          //       console.log('SUCCESSFULLY VESSEL INFO INSERTED...')

          //     })

          //   })
          // })

        }
        else {
          this.toastr.error("Incorrect Username / Password");
        }
      }
      else {
        this.toastr.error("Please enter all field");
      }
    })


  }
  constructor(
    private router: Router,
    private login: LoginService,
    private ipc: IpcCal,
    private toastr: ToastrService,
    private ser: AppService,
    private setData: SetData
  ) {
    // if(true)
    // {
    //   this.router.navigate(['/dashboard']);
      
    // }

  }


  ngOnInit() {
    // this.ipc.synchronizeCentral().then((value)=>{
    //   let a=this.ser.onSynchCentral();
    //   a.subscribe(res=>{
    //     console.log(res)
    //   })
    // });

    this.login.currentUser.subscribe(loggedInUser => this.loggedInUser = loggedInUser);

  }

}
