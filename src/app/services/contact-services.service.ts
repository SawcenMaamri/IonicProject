import { Injectable } from '@angular/core';
import { ContactModule } from '../moduls/contact/contact.module';


@Injectable({
  providedIn: 'root'
})
export class ContactServicesService {

  public contacts: ContactModule[]=[
    {nom:"Mhelhli",prenom:"habib",num1:"99001100",num2:"",dateCreation:new Date,dateModification:new Date,categorie:"Amis"},
    {nom:"sawsen",prenom:"sawsen",num1:"71222222",num2:"98777777",dateCreation:new Date,dateModification:new Date,categorie:"Famille"},
    ]


  constructor() { }
  getAll(){
    return this.contacts;
  }
  add(contact:ContactModule){
    contact.dateCreation=new Date()
    this.contacts.push(contact);
  }
  getItem(nom: string): ContactModule {
    return this.contacts.find(element => element.nom =nom);
  }
}
