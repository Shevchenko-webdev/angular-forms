import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SimpleFormComponent} from "./simple-form/simple-form.component";
import {AdvancedFormComponent} from "./advanced-form/advanced-form.component";

const routes: Routes = [
  {path: 'simple-form', component: SimpleFormComponent},
  {path: 'advanced-form', component: AdvancedFormComponent},
  {path: '', redirectTo: 'simple-form', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
