import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { IpcCal } from '../ipcCall';
import { AppService } from '../app.service';
import { SetData } from '../setData';


@Component({
  selector: 'app-vessel-user-config',
  templateUrl: './vessel-user-config.component.html',
  styleUrls: ['./vessel-user-config.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class VesselUserConfigComponent implements OnInit {

  selectedVessel: any;
  selectedUsers: any;
  vslRecords: any;
  vslArray:any[]=[];
  userArray: any[]=[];
  userIdArray:any[]=[];
  vslRecordsArray: any;
  selectedVesselDetails:any;
  isVesselSelected: boolean=true;
  selectedUserName: any;
  isUserSelected: boolean=true;

 
 
  
  constructor(
    private router: Router,
    private data: DataService,
    private httpService: HttpClient,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private ipc: IpcCal,
    private ser: AppService,
    private setData: SetData

  ) {
    
        let a = this.ser.onRetrieveVesselInfo();
        a.subscribe(res => {
          

          console.log(res);

          this.vslRecordsArray=res;
          for(let i=0;i<this.vslRecordsArray.length;i++){
            this.vslArray.push(this.vslRecordsArray[i].vesselName);
            console.log(this.vslRecordsArray[i].vesselName);           
          }
          console.log( this.vslArray);
          config.backdrop = 'static';
          config.keyboard = false;
        })
  
  }

  selectVessel(event, vessel) {
    this.form.reset();
    this.isUserSelected=true;
    this.isVesselSelected=false;
    this.selectedVessel = vessel;
    console.log(vessel);
    this.userArray=[];
    let a=this.vslRecordsArray.filter(i=>i.vesselName==vessel);
    console.log(a[0]);
    for(let i=0;i<a[0].maUserVesselAccess.length;i++){
      console.log(a[0].maUserVesselAccess[i].name);
      this.userArray.push(a[0].maUserVesselAccess[i].name);
    }
    console.log(this.userArray);
  }

  onUserSelectChange(){
    console.log("checkkkkkkkk");
    if(this.form.valid){
      this.isUserSelected=false;
    }
    else{
      this.isUserSelected=true;
    }
   
  }
 
  form = new FormGroup({
    username: new FormControl('', Validators.required),
    //vessel: new FormControl('', Validators.required),
  });

  openConfirmationModal(){
   alert(this.form.valid);
    this.selectedUsers=this.form.value.username;
    
  }

  getUserId(){
      console.log(this.selectedVessel);
      console.log(this.form.value.username);
      console.log(this.selectedUserName);
    let tempArr=[];
    this.userIdArray=[];
    tempArr=this.form.value.username;
    console.log(tempArr);
    let a=this.vslRecordsArray.filter(i=>i.vesselName==this.selectedVessel);
    console.log(a[0].maUserVesselAccess);
    let q=a[0].maUserVesselAccess;

    for(let i=0;i<tempArr.length;i++){
      console.log(tempArr[i]);
      console.log(q.filter(k=>k.name==tempArr[i]));
      console.log(q.filter(k=>k.name==tempArr[i])[0].userId);
      this.userIdArray.push(q.filter(k=>k.name==tempArr[i])[0].userId);
    }
    console.log("************************");
   
    this.selectedVesselDetails=a[0];
    console.log(this.selectedVesselDetails);
    console.log(this.userIdArray);
    this.setData.onSetRetrievedVesselInfo(this.selectedVesselDetails).then((value) => {
      this.ipc.onRetrieveAndSaveVesselInfo(value).then((value) => {

              console.log('SUCCESSFULLY VESSEL INFO INSERTED...')
              console.log(value);

              this.setData.onSetUserId(this.userIdArray).then((value)=>{

                // let param:any=[{"userId":"101"},{"userId":"102"}];
                 let param=value;
                 let b = this.ser.onRetrieveUsers(param);
                 b.subscribe(res => {
                   console.log(res)
                   this.setData.onSetRetrievedUsers(res).then((value)=>{
                     this.ipc.onRetrieveAndSaveUsers(value).then((value)=>{
                       console.log('SUCCESSFULLY USERS INFO INSERTED...')
                       console.log(value);
                       this.router.navigate(['/login']); 
                     })
                   })
                 })
     
               })

            })
          })

          
        

   
    
  }

  ngOnInit() 
  {
        
  }

}
