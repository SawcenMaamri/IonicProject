import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'ajouter-contact',
    loadChildren: () => import('./pages/ajouter-contact/ajouter-contact.module').then( m => m.AjouterContactPageModule)
  },
  {
    path: 'details-contact/:nom',
    loadChildren: () => import('./pages/details-contact/details-contact.module').then( m => m.DetailsContactPageModule)
  },
  {
    path: 'recherche-contact',
    loadChildren: () => import('./pages/recherche-contact/recherche-contact.module').then( m => m.RechercheContactPageModule)
  },
  {
    path: 'index',
    loadChildren: () => import('./pages/index/index.module').then( m => m.IndexPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
