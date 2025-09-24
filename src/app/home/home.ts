import { Component, NgModule, OnInit } from '@angular/core';
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
export class Home implements OnInit{
  tempvalue:string="rating"
  topThreeDesination:TravelObjectType[];
  constructor(private service:TravelDestinationObject){
    this.topThreeDesination=this.service.topThreeDesination();
  }
  ngOnInit(): void {
    
  }
 
}
