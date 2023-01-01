import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { login } from './login.page';


const routes: Routes = [
  {
    path: '',
    component: login,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class loginPageRoutingModule {}
