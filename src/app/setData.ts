import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
@NgModule({})
export class SetData {
 
    constructor(private datePipe: DatePipe) {

    }

    onSetDefCreate(formData,commonData,defCommonData,seqNo){
        return new Promise((resolve, reject) => {
            
            let SEQ=seqNo.SEQ_NO;
            let AUDIT_TRACKING_NUMBER = commonData[8];
           // let AUDIT_TRACKING_NUMBER =  formData.comments_by_auditor;
            let COMPANY_ID = commonData[0];
            let VESSEL_CODE = commonData[2];
            let AUDIT_CATEGORY = commonData[5];
            let AUDIT_TYPE = commonData[7];
            let AUDIT_INTERVAL = commonData[6];
            var AUDIT_DATE = this.datePipe.transform(formData.audit_date,"yyyy-MM-dd");
            //let AUDIT_DATE = '2033-03-05';
            let AUDIT_PORT = commonData[12];
            let CREATED_USER_ID = commonData[13];
            var CREATION_DATE = this.datePipe.transform(new Date,"yyyy-MM-dd hh:mm:ss");
            
         

            let insertAuditCodeInfo=[AUDIT_TRACKING_NUMBER];
            insertAuditCodeInfo.push(COMPANY_ID);
            insertAuditCodeInfo.push(VESSEL_CODE);
            insertAuditCodeInfo.push(AUDIT_CATEGORY);
            insertAuditCodeInfo.push(AUDIT_TYPE);
            insertAuditCodeInfo.push(AUDIT_INTERVAL);
            insertAuditCodeInfo.push(AUDIT_DATE);
            insertAuditCodeInfo.push(AUDIT_PORT);
            insertAuditCodeInfo.push(CREATED_USER_ID);
            insertAuditCodeInfo.push(CREATION_DATE);
            insertAuditCodeInfo.push(commonData[8]);
     

            let seqNum=SEQ+'';
            for(let i=seqNum.length;i<3;i++)
            {
                seqNum='0'+seqNum;
            }
            let DEFICIENCY_ID = formData.serial_no+'_'+seqNum;
            let COMPANY_ID_MA = commonData[0]; 
            let AUDIT_TRACKING_NUMBER_MA =commonData[8];
           //let AUDIT_TRACKING_NUMBER_MA =formData.comments_by_auditor;
            let CODE_ID = defCommonData[2];
            let CODE_REF_ID = defCommonData[1];
            let ROOT_CAUSE_ANALYSIS = formData.root_cause_analysis;
            let CAUSE_ID = defCommonData[0];
            let STATUS = formData.status;
            let DEFICIENCY_TYPE = formData.mnc_nc_obs;
            let USER_NAME = commonData[9]; 
            var DATE_INS = this.datePipe.transform(new Date,"yyyy-MM-dd HH:MM:ss");

            let insertMaDefData=[DEFICIENCY_ID];
            insertMaDefData.push(COMPANY_ID_MA);
            insertMaDefData.push(AUDIT_TRACKING_NUMBER_MA);
            insertMaDefData.push(CODE_ID);
            insertMaDefData.push(CODE_REF_ID);
            insertMaDefData.push(ROOT_CAUSE_ANALYSIS);
            insertMaDefData.push(CAUSE_ID);
            insertMaDefData.push(STATUS);
            insertMaDefData.push(DEFICIENCY_TYPE);
            insertMaDefData.push(USER_NAME);
            insertMaDefData.push(DATE_INS);

            let trx_no='1';
            let insertDefData=[trx_no];
            var target_date = this.datePipe.transform(formData.target_date,"yyyy-MM-dd");
            var close_date = this.datePipe.transform(formData.close_date,"yyyy-MM-dd");

            //let target_date='1995-02-02';
            //let close_date='2001-02-02';
            let UPDATED_PLACE='Q';
            let Username=commonData[9]; 
            let Date_ins=this.datePipe.transform(new Date,"yyyy-MM-dd HH:MM:ss");

            //insertDefData.push(trx_no);
            insertDefData.push(DEFICIENCY_ID);
            insertDefData.push(formData.remarks);
            insertDefData.push(formData.accept_cap_by_auditor);
            insertDefData.push(formData.details_of_nc);
            insertDefData.push(target_date);
            insertDefData.push(formData.corrective_action_plan);
            insertDefData.push(formData.comments_by_auditor);
            insertDefData.push(formData.ship_revised_by_cap);
            insertDefData.push(formData.accept_revised_cap_by_auditor);
            insertDefData.push(close_date);
            insertDefData.push(formData.preventive_action);
            insertDefData.push(formData.error_check);
            insertDefData.push(UPDATED_PLACE);
            insertDefData.push(formData.status);
            insertDefData.push(Username);
            insertDefData.push(Date_ins);

            let allData=[insertAuditCodeInfo];
            allData.push(insertMaDefData);
            allData.push(insertDefData);
            resolve(allData);
        })
    }

    onSetDefEdit(formData:any,commonData:any,txnNum:any){
        return new Promise((resolve, reject) => {
           // let getTxn=formData.serial_no.substring(formData.serial_no.length-2,formData.serial_no.length)
            let trx_no_temp=+txnNum+1;
            let trx_no=trx_no_temp+'';
            let insertDefData=[trx_no];
            var target_date = this.datePipe.transform(formData.target_date,"yyyy-MM-dd");
            var close_date = this.datePipe.transform(formData.close_date,"yyyy-MM-dd");

            let UPDATED_PLACE='Q';
            let Username=commonData[9]; 
            let Date_ins=this.datePipe.transform(new Date,"yyyy-MM-dd HH:MM:ss");

            //insertDefData.push(trx_no);
            insertDefData.push(formData.serial_no);
            insertDefData.push(formData.remarks);
            insertDefData.push(formData.accept_cap_by_auditor);
            insertDefData.push(formData.details_of_nc);
            insertDefData.push(target_date);
            insertDefData.push(formData.corrective_action_plan);
            insertDefData.push(formData.comments_by_auditor);
            insertDefData.push(formData.ship_revised_by_cap);
            insertDefData.push(formData.accept_revised_cap_by_auditor);
            insertDefData.push(close_date);
            insertDefData.push(formData.preventive_action);
            insertDefData.push(formData.error_check);
            insertDefData.push(UPDATED_PLACE);
            insertDefData.push(formData.status);
            insertDefData.push(Username);
           insertDefData.push(Date_ins);

           let updateDefData=[formData.status];
           updateDefData.push(commonData[0]);
           updateDefData.push(formData.serial_no);

           let allData=[insertDefData];
           allData.push(updateDefData);

            resolve(allData);
        })
    }

    onSetRetrievedVesselInfo(res: any) {
        console.log(res)
        return new Promise((resolve, reject) => {
         let arrVesInfo=[];
            // for(let i=0;i<res.length;i++){
            //     let temp=[];

                arrVesInfo.push(res.vesselCode);
                arrVesInfo.push(res.companyId);
                arrVesInfo.push(res.vesselName);
                arrVesInfo.push(res.imoNumber);
                arrVesInfo.push(res.officialNumber);
                arrVesInfo.push(res.activeStatus);
                arrVesInfo.push(res.userIns);
                arrVesInfo.push(res.dateIns);

                //arrVesInfo.push(temp);         
           // }
            console.log(arrVesInfo)
            resolve(arrVesInfo);

        })
      }

      onSetRetrievedUsers(res: any) {
        return new Promise((resolve, reject) => {
         let arrUsers=[];
            for(let i=0;i<res.length;i++){
                let temp=[];

                temp.push(res[i].userId);
                temp.push(res[i].companyId);
                temp.push(res[i].username);
                temp.push(res[i].firstName);
                temp.push(res[i].lastName);
                temp.push(res[i].password);
                temp.push(res[i].activeStatus);
                temp.push(res[i].phoneNo);
                temp.push(res[i].userRole);
                temp.push(res[i].dateIns);

                arrUsers.push(temp);         
            }
            resolve(arrUsers);

        })
      }

      onSetUserId(data: any) {
        return new Promise((resolve, reject) => {
            let myUser=[];
           
            console.log(data.length)
            for(let i=0;i<data.length;i++){
                let temp={'userId':''};
                console.log(data[i])
                temp.userId=data[i];
                myUser.push(temp);

            }
            console.log(myUser)
            resolve(myUser);

        })
      }
    
    

}