import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { menu } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: menu,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class menuPageRoutingModule {}
