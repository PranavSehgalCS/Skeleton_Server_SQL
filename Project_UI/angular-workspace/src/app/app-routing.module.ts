import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { ViewTemplateComponent } from './components/Template/view-template/view-template.component';

const routes: Routes = [
  { path: '', redirectTo: '/templates', pathMatch: 'full' },
  { path:'templates', component:ViewTemplateComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }