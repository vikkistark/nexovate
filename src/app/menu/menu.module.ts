import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { menu } from './menu.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { menuPageRoutingModule } from './menu-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    menuPageRoutingModule
  ],
  declarations: [menu]
})
export class menuPageModule {}
