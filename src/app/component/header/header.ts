import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TravelObjectType } from '../../model/TravelModel.type';
import { TravelDestinationObject } from '../../service/travel-destination-object';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header{
  ValueEntered: string = '';
  get flag():boolean{
    
    return this.ValueEntered.length>0;
  }
  constructor(private readonly traveldestinationobject:TravelDestinationObject){

  }
  get newArray():TravelObjectType[]{
    if(!this.traveldestinationobject.TravelDestinationObjArray){
      return [];
    }
    return this.traveldestinationobject.TravelDestinationObjArray.filter(n=>n.cityName.toLocaleLowerCase().includes(this.ValueEntered));9
  }
  

  // if(ValueEntered.length>0){
  //   this.flag=true;
  // }
}
