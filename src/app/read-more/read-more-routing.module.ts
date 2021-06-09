import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadMorePage } from './read-more.page';

const routes: Routes = [
  {
    path: '',
    component: ReadMorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadMorePageRoutingModule {}
