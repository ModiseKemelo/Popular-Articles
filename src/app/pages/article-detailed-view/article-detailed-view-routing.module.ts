import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleDetailedViewPage } from './article-detailed-view.page';

const routes: Routes = [
  {
    path: '',
    component: ArticleDetailedViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleDetailedViewPageRoutingModule {}
