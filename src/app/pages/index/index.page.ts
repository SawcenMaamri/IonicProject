import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ContactModule } from 'src/app/moduls/contact/contact.module';
import { ContactServicesService } from 'src/app/services/contact-services.service';


@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {
  contacts : ContactModule[]
  constructor(
    private navCtrl:NavController,
    private alertCtrl:AlertController,
    private contactServices:ContactServicesService
  ) { }

  ngOnInit() {
   this. getContact()
  }
  async getContact(){
   this.contacts= this.contactServices.getAll()
  }
  onClickAdd(){
    this.navCtrl.navigateForward('/ajouter-contact')
  }

  detail(nom:string){
    console.log(nom)
    this.navCtrl.navigateForward('/details-contact/'+ nom )
  }
  recherche(){
    this.navCtrl.navigateForward('/recherche-contact' )
  }

}
