import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoapiComponent } from './todoapi/todoapi.component';

const routes: Routes = [{
  path: "",
  component: TodoapiComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
