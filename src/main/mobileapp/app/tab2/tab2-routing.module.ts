import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loginPage } from './tab2.page';

const routes: Routes = [
  {
    path: '',
    component: loginPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
