import { Component, OnInit } from '@angular/core';
import { ContactServicesService } from 'src/app/services/contact-services.service';

@Component({
  selector: 'app-ajouter-contact',
  templateUrl: './ajouter-contact.page.html',
  styleUrls: ['./ajouter-contact.page.scss'],
})
export class AjouterContactPage implements OnInit {
  constructor(
    private contactServices:ContactServicesService
  ) {
   }

  ngOnInit() {
  }
  onSubmit(){
  }

}

