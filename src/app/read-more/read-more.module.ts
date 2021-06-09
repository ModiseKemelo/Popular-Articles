import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReadMorePageRoutingModule } from './read-more-routing.module';

import { ReadMorePage } from './read-more.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReadMorePageRoutingModule
  ],
  declarations: [ReadMorePage]
})
export class ReadMorePageModule {}
