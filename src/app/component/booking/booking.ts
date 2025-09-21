import { Component, inject, OnInit, signal } from '@angular/core';
import { Travelcitycard } from '../travelcitycard/travelcitycard';
import { CommonModule } from '@angular/common'
import { TravelDestinationObject } from '../../service/travel-destination-object';
import { TravelObjectType } from '../../model/TravelModel.type';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { pipe } from 'rxjs';
import { Ratingstar } from '../ratingstar/ratingstar';

@Component({
  selector: 'app-booking',
  imports: [Travelcitycard,CommonModule,FormsModule,RouterLink,Ratingstar],
  templateUrl: './booking.html',
   styleUrls: ['./booking.css']
})
export class Booking implements OnInit {
  obj=inject(TravelDestinationObject);
  traveldestination=this.obj.TravelDestinationObjArray;
  fun(obj:any) {
    if(obj.button_name=="show"){
      obj.button_name="hide";
      obj.btntype="btn-danger";
      obj.show_image="hidden";
    }
    else{
      obj.button_name="show";
      obj.btntype="btn-primary"
      obj.show_image="";
    }
    
    
  }
  ngOnInit():void{
    
  }
    ValueEntered: string = '';
  get flag():boolean{
    
    return this.ValueEntered.length>0;
  }
  constructor(private readonly traveldestinationobject:TravelDestinationObject){

  }
  get dropdownvalue():string{
    // console.log(this.dropdownvalue)

    return this.tempvalue;
  }
  tempvalue:string="cityName";
  selectDropdownItem(dropdown:string){
    console.log(dropdown)
    this.tempvalue=dropdown;
  }
  get newArray():TravelObjectType[]{
    if (!this.traveldestinationobject.TravelDestinationObjArray) {
      return [];
    }

    const filteredArray = this.traveldestinationobject.TravelDestinationObjArray.filter(
      n => n.cityName.toLocaleLowerCase().includes(this.ValueEntered.toLocaleLowerCase())
    );

    // Now, sort the filtered array dynamically based on this.tempvalue
    return filteredArray.sort((a, b) => {
      const sortProperty = this.tempvalue as keyof TravelObjectType; // Cast to keyof TravelObjectType for type safety

      const valA = a[sortProperty];
      const valB = b[sortProperty];

      
      if (typeof valA === 'string' && typeof valB === 'string') {
        return valA.localeCompare(valB); 
      } else if (typeof valA === 'number' && typeof valB === 'number') {
        return valA - valB;
      } else {
        return 0;
      }
    });
  }
  }
