import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import * as $ from 'jquery';


import { DataService } from './services/data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeficiencyCreateComponent } from './deficiency-create/deficiency-create.component';
import { LoginComponent } from './login/login.component';
import { DeficiencySearchComponent } from './deficiency-search/deficiency-search.component';
import { DeficiencyHistoryComponent } from './deficiency-history/deficiency-history.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VesselUserConfigComponent } from './vessel-user-config/vessel-user-config.component';

import { NgxElectronModule } from 'ngx-electron';
import { ToastrModule } from 'ngx-toastr';
import { IpcCal } from './ipcCall';
import { SetData } from './setData';
import { DatePipe } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'createDeficiency', component: DeficiencyCreateComponent },
  { path: 'searchDeficiency', component: DeficiencySearchComponent },
  { path: 'deficiencyHistory', component: DeficiencyHistoryComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'configPage', component: VesselUserConfigComponent },
  // { path: '', component: LoginComponent },
  // { path: '**', component: LoginComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    DeficiencyCreateComponent,
    LoginComponent,
    DeficiencySearchComponent,
    DeficiencyHistoryComponent,
    DashboardComponent,
    VesselUserConfigComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) ,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule, 
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,  
    MatExpansionModule,
    MatCheckboxModule,  
    MatRadioModule,
    AppRoutingModule,
    NgxElectronModule,
    IpcCal,
    SetData,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),
    NgbModule     
  ],
  providers: [MatDatepickerModule,DatePipe,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
