import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { domain } from './domain.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { domainPageRoutingModule } from './domain-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    domainPageRoutingModule
  ],
  declarations: [domain]
})
export class domainPageModule {}
