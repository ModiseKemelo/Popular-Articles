import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'article-detailed-view',
    loadChildren: () => import('./article-detailed-view/article-detailed-view.module').then( m => m.ArticleDetailedViewPageModule)
  },
  {
    path: 'read-more',
    loadChildren: () => import('./read-more/read-more.module').then( m => m.ReadMorePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
