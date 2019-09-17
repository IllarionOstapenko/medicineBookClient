import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../material.module';
import {HeadPageComponent} from '../components/head-page/head-page.component';
import {ElementsModule} from './elements.module';
import {PatientModule} from './patient.module';
import {TestGuard} from '../test.guard';

const routs: Routes = [{
    path: '', component: HeadPageComponent, children: [
        {path: 'patient', loadChildren: 'src/app/modules/patient.module#PatientModule'}, /*components/elements/elements.module*/
        {path: 'doctor', loadChildren: 'src/app/modules/doctor.module#DoctorModule'},
        // {path: 'laboratory', loadChildren: 'src/app/modules/laboratory.module#LaboratoryModule' }
    ]
}];

@NgModule({
    declarations: [
        HeadPageComponent],
    imports: [
        CommonModule,
        MaterialModule,
        ElementsModule,
        PatientModule,
        RouterModule.forChild(routs),

    ],
    exports: [
        RouterModule,
        HeadPageComponent
    ]
})
export class HeadModule {
}
