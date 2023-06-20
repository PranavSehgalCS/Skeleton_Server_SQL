import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ViewTemplateComponent } from './components/Template/view-template/view-template.component';
import { CreateTemplateComponent } from './components/Template/create-template/create-template.component';
const routes: Routes = [
  { path: '', redirectTo: '/templates/view', pathMatch: 'full' },

  { path:'templates/view', component:ViewTemplateComponent },
  { path:'templates/create', component:CreateTemplateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }