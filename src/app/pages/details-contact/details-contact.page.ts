import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactModule } from 'src/app/moduls/contact/contact.module';
import { ContactServicesService } from 'src/app/services/contact-services.service';

@Component({
  selector: 'app-details-contact',
  templateUrl: './details-contact.page.html',
  styleUrls: ['./details-contact.page.scss'],
})
export class DetailsContactPage implements OnInit {
  nom:string
  contact:ContactModule
    constructor(    private contactServices:ContactServicesService ,
      private activatedRoute:ActivatedRoute   ) {
    }

    ngOnInit() {
      this.nom=this.activatedRoute.snapshot.paramMap.get('nom')
      this.contact=this.contactServices.getItem(this.nom)
    }

  }


