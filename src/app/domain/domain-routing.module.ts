import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { domain } from './domain.page';


const routes: Routes = [
  {
    path: '',
    component: domain,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class domainPageRoutingModule {}
