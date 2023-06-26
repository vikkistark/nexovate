import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { purchaseOrderApprovalPage } from './purchase-order-approval.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { purchaseOrderApprovalPageRoutingModule } from './purchase-order-approval-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    purchaseOrderApprovalPageRoutingModule
  ],
  declarations: [purchaseOrderApprovalPage]
})
export class purchaseOrderApprovalPageModule {}
