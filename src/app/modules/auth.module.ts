import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../components/auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonToggleModule, MatFormFieldModule, MatIconModule} from '@angular/material';
import {MaterialModule} from '../material.module';
import {PatientComponent} from '../components/auth/create/patient/patient.component';
import {DoctorComponent} from '../components/auth/create/doctor/doctor.component';
import {LaboratoryComponent} from '../components/auth/create/laboratory/laboratory.component';
import {AuthComponent} from '../components/auth/auth.component';


const routs: Routes = [
    {
        path: '', component: AuthComponent, children: [
            {
                path: 'login', component: LoginComponent, children: [
                    {path: 'patient', component: PatientComponent},
                    {path: 'doctor', component: DoctorComponent},
                    {path: 'laboratory', component: LaboratoryComponent},
                ]
            },

        ]
    }
];


@NgModule({
    declarations: [
        LoginComponent,
        PatientComponent,
        DoctorComponent,
        LaboratoryComponent,
        AuthComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routs),
        FormsModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonToggleModule,
        MaterialModule
    ],
    exports: [
        RouterModule
    ]
})
export class AuthModule {
}
