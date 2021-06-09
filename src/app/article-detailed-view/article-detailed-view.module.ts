import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticleDetailedViewPageRoutingModule } from './article-detailed-view-routing.module';

import { ArticleDetailedViewPage } from './article-detailed-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticleDetailedViewPageRoutingModule
  ],
  declarations: [ArticleDetailedViewPage]
})
export class ArticleDetailedViewPageModule {}
