import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TravelDestinationObject } from '../../service/travel-destination-object';
import { TravelObjectType } from '../../model/TravelModel.type';
import { CommonModule } from '@angular/common';
import { Ratingstar } from '../ratingstar/ratingstar';

ActivatedRoute;
@Component({
  selector: 'app-travelcitycard',
  imports: [CommonModule,Ratingstar],
  templateUrl: './travelcitycard.html',
  styleUrl: './travelcitycard.css',
})
export class Travelcitycard implements OnInit {
  cityId: string | null;
  travelobj: TravelObjectType|null=null;
  toDisplayError: boolean = true;
  constructor(private route: ActivatedRoute, private service: TravelDestinationObject) {
    this.cityId = this.route.snapshot.paramMap.get('cityId');
    console.log(this.cityId);
    if (this.cityId != null) {
      const temp = service.getTravelDestinationById(this.cityId);
      if (temp.length > 0) {
        console.log(temp);
        this.travelobj=temp[0];
        this.toDisplayError=false;
      }
      else {
        this.toDisplayError=true;
        console.log('no such id found');
      }
    }
    else{
      console.log('no such id found');
    }
  }
  ngOnInit(): void {}
}
