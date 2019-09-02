import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material/';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router, RouterModule, Routes} from '@angular/router';
// import { DoctorComponent } from './registration/doctor/doctor.component';
import {PatientComponent} from './registration/patient/patient.component';
import {LaboratoryComponent} from './registration/laboratory/laboratory.component';
import {DoctorComponent} from './registration/doctor/doctor.component';

const routs: Routes = [
  {path: 'patient', component: PatientComponent},
  {path: 'doctor', component: DoctorComponent},
  {path: 'laboratory', component: LaboratoryComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorComponent,
    PatientComponent,
    LaboratoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routs),
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

