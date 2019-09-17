import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../material.module';
import {MyPageComponent} from '../components/head-page/my-page/my-page.component';
import {ElementsModule} from './elements.module';
import {ToDoctorComponent} from '../components/head-page/to-doctor/to-doctor.component';
import {HistoryAnalyzesComponent} from '../components/head-page/history-analyzes/history-analyzes.component';
import { HistoryInDoctorComponent } from '../components/head-page/history-in-doctor/history-in-doctor.component';

const routs: Routes = [
    {
        path: 'mypage', component: MyPageComponent
        // path: '', component: FirsPageComponent, children:
        // [
        //     {path: 'my-page', component: MyPageComponent}
        // ]
    },
    {path: 'goToDoctor', component: ToDoctorComponent},
    {path: 'historyAnalyzes', component: HistoryAnalyzesComponent},
    {path: 'historyInDoctor', component: HistoryInDoctorComponent}
];

@NgModule({
    declarations: [
        MyPageComponent,
        ToDoctorComponent,
        HistoryAnalyzesComponent,
        HistoryInDoctorComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ElementsModule,
        RouterModule.forChild(routs)
    ],
    exports: [
        RouterModule,
        MyPageComponent
    ]
})
export class PatientModule {
}
