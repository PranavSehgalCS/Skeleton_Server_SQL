import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { ViewTemplateComponent } from './components/Template/view-template/view-template.component';
import { CreateTemplateComponent } from './components/Template/create-template/create-template.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewTemplateComponent,
    CreateTemplateComponent
    ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { 
}
