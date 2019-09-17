import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TestGuard} from './test.guard';


const routs: Routes = [
    {path: '', redirectTo: 'auth/login', pathMatch: 'full'},
    {path: 'auth', loadChildren: 'src/app/modules/auth.module#AuthModule'},
    {path: 'head', canActivate: [TestGuard], loadChildren: 'src/app/modules/head.module#HeadModule'},
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routs),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
