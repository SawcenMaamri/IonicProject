import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { ContactModule } from 'src/app/moduls/contact/contact.module';
import { ContactServicesService } from 'src/app/services/contact-services.service';

@Component({
  selector: 'app-recherche-contact',
  templateUrl: './recherche-contact.page.html',
  styleUrls: ['./recherche-contact.page.scss'],
})
export class RechercheContactPage implements OnInit {
  contacts : ContactModule[]
  constructor(
    private navCtrl:NavController,
    private contactServices:ContactServicesService
  ) { }
  ngOnInit() {
    this. getContact()
  }
  getItems(e){
console.log(e)
  }
  getContact(){
    this.contacts= this.contactServices.getAll()
   }
  detail(nom:string){

    this.navCtrl.navigateForward('/details-contact/'+ nom )
  }

}
