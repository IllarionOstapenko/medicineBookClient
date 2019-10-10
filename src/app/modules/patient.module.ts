import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../material.module';
import {MyPageComponent} from '../components/head-page/my-page/my-page.component';
import {ElementsModule} from './elements.module';
import {RecordToDoctorComponent} from '../components/head-page/record-to-doctor/record-to-doctor.component';
import {HistoryAnalyzesComponent} from '../components/head-page/history-analyzes/history-analyzes.component';
import {VisitInDoctorComponent} from '../components/head-page/visit-in-doctor/visit-in-doctor.component';
import {ListSpecialityComponent} from '../components/head-page/record-to-doctor/list-speciality/list-speciality.component';
import {DoctorsComponent} from '../components/head-page/record-to-doctor/list-speciality/doctors/doctors.component';
import {HistoryVisitsComponent} from '../components/head-page/visit-in-doctor/history-visits/history-visits.component';
import {FutureVisitsComponent} from '../components/head-page/visit-in-doctor/future-visits/future-visits.component';

const routs: Routes = [
    {path: 'myPage', component: MyPageComponent},
    {
        path: 'record-to-doctor', component: RecordToDoctorComponent, children: [
            {path: 'doctors/:speciality', component: DoctorsComponent}
        ]
    },
    {path: 'historyAnalyzes', component: HistoryAnalyzesComponent},
    {
        path: 'visit-in-doctor', component: VisitInDoctorComponent, children: [
            {path: 'history-visits', component: HistoryVisitsComponent},
            {path: 'future-visits', component: FutureVisitsComponent}
        ]
    },
];

@NgModule({
    declarations: [
        MyPageComponent,
        RecordToDoctorComponent,
        HistoryAnalyzesComponent,
        VisitInDoctorComponent,
        ListSpecialityComponent,
        DoctorsComponent,
        HistoryVisitsComponent,
        FutureVisitsComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ElementsModule,
        RouterModule.forChild(routs),
    ],
    exports: [
        RouterModule,
        MyPageComponent
    ]
})
export class PatientModule {
}
