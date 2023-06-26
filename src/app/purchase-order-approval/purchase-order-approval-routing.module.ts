import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { purchaseOrderApprovalPage } from './purchase-order-approval.page';

const routes: Routes = [
  {
    path: '',
    component: purchaseOrderApprovalPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class purchaseOrderApprovalPageRoutingModule {}
