import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RechercheContactPageRoutingModule } from './recherche-contact-routing.module';

import { RechercheContactPage } from './recherche-contact.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RechercheContactPageRoutingModule
  ],
  declarations: [RechercheContactPage]
})
export class RechercheContactPageModule {}
