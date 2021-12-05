import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ContactModule {
  nom:string
  prenom:string
  num1:any
  num2:any
  dateCreation:Date
  dateModification:Date
  categorie:string
 }
