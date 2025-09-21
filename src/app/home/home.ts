import { Component, NgModule } from '@angular/core';
import { Booking } from '../component/booking/booking';
import { Header } from '../component/header/header';
import { Footer } from '../component/footer/footer';
import { Travelcitycard } from '../component/travelcitycard/travelcitycard';
import { TravelDestinationObject } from '../service/travel-destination-object';
import { TravelObjectType } from '../model/TravelModel.type';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Ratingstar } from '../component/ratingstar/ratingstar';

@Component({
  selector: 'app-home',
  imports: [Booking,Header,Footer,Travelcitycard,CommonModule,RouterLink,Ratingstar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  tempvalue:string="rating"
  constructor(private service:TravelDestinationObject){

  }
  get topThreeDesination():TravelObjectType[]{
    const filteredArray= this.service.TravelDestinationObjArray;
  
  const fullObj= filteredArray.sort((a, b) => {
      const sortProperty = this.tempvalue as keyof TravelObjectType; // Cast to keyof TravelObjectType for type safety

      const valA = a[sortProperty];
      const valB = b[sortProperty];
      
      
      if (typeof valA === 'string' && typeof valB === 'string') {
        return valA.localeCompare(valB); 
      } else if (typeof valA === 'number' && typeof valB === 'number') {
        return valB - valA;
      } else {
        return 0;
      }
    });
    return [fullObj[0],fullObj[1],fullObj[2]]
  }
}
