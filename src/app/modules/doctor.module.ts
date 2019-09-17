import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../material.module';
import {ElementsModule} from './elements.module';
import { ReceptionPatientComponent } from '../components/head-page/reception-patient/reception-patient.component';
import { WorkingCalendarComponent } from '../components/head-page/working-calendar/working-calendar.component';
import { HistoryReceptionComponent } from '../components/head-page/history-reception/history-reception.component';

const routs: Routes = [
    {path: 'receptionPatient', component: ReceptionPatientComponent},
    {path: 'workingCalendar', component: WorkingCalendarComponent},
    {path: 'historyReception', component: HistoryReceptionComponent},
];


@NgModule({
    declarations: [
    ReceptionPatientComponent,
    WorkingCalendarComponent,
    HistoryReceptionComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ElementsModule,
        RouterModule.forChild(routs)
    ],
    exports: [
        RouterModule,
    ]
})
export class DoctorModule {
}
