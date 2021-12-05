import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RechercheContactPage } from './recherche-contact.page';

const routes: Routes = [
  {
    path: '',
    component: RechercheContactPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RechercheContactPageRoutingModule {}
