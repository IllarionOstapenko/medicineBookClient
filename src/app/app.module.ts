import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule
} from '@angular/material/';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ElementsModule} from './modules/elements.module';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './material.module';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ElementsModule,
        BrowserModule,
        MaterialModule,
        BrowserAnimationsModule,
        // RouterModule,
        // MatButtonModule,
        // ReactiveFormsModule,
        // MatFormFieldModule,
        // MatInputModule,
        // MatSelectModule,
        // MatButtonToggleModule,
        // MatDatepickerModule,
        // MatNativeDateModule,
        // MatRadioModule,
        // MatIconModule,
        // MatToolbarModule,

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}

