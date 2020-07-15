import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {PersonComponent} from './component/person.component';
import  {HomeComponent} from  './component/home.component';
import {FormComponent} from "./component/Form/form.component";
import {DetailsService} from "./services/DetailsService";


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
