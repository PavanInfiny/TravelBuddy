import { Injectable } from '@angular/core';
import { TravelObjectType } from '../model/TravelModel.type';

@Injectable({
  providedIn: 'root'
})
export class TravelDestinationObject {
  updateDestinationDetailById(editId: string, editedPackage: TravelObjectType) {
    this.TravelDestinationObjArray=this.TravelDestinationObjArray.map(n=>
    {
      if(n.cityID==editId){
        return editedPackage
      }
      else{
        return n;
      }
    }
    )

    console.log(this.TravelDestinationObjArray);
  }
  deleteVacationById(id: string) {

    const tempArray=this.TravelDestinationObjArray.filter(n=>n.cityID!=id);
    this.TravelDestinationObjArray=tempArray;
  }
   TravelDestinationObjArray:TravelObjectType[]=[
    {
      "cityID": "C001",
      "cityName": "Paris",
      "cityDescription": "A vibrant metropolis known for its iconic landmarks, diverse culture, and bustling energy.",
      "placesToSee": [
        "Eiffel Tower",
        "Louvre Museum",
        "Notre-Dame Cathedral",
        "Champs-Élysées",
      ],
      "show_image"  : "hidden",
      "button_name" : "hide",
      "rating": 4.5,
      "btntype":"btn-danger",
      "price":30000,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/330px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg"
    },
    {
      "cityID": "C002",
      "cityName": "Rome",
      "cityDescription": "The Eternal City, rich in history, ancient ruins, and stunning art and architecture.",
      "placesToSee": [
        "Colosseum",
        "Vatican City",
        "Trevi Fountain",
        "Pantheon"
      ],
      "btntype":"btn-danger",
      "rating": 3.5,
      "show_image"  : "hidden",
      "button_name" : "hide",
      "price":20000,
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Rainbow_Bridge_%28Tokyo%29_at_night_8.jpg/330px-Rainbow_Bridge_%28Tokyo%29_at_night_8.jpg"
    },
    {
      "cityID": "C003",
      "cityName": "Tokyo",
      "cityDescription": "A city where ancient traditions meet modern innovation, famous for its temples, gardens, and bustling markets.",
      "placesToSee": [
        "Senso-ji Temple",
        "Tokyo Skytree",
        "Shibuya Crossing",
        "Imperial Palace"
      ],
      "price":50000,
      "btntype":"btn-danger",
      "rating": 2.5,
      "show_image"  : "hidden",
      "button_name" : "hide",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Rainbow_Bridge_%28Tokyo%29_at_night_8.jpg/330px-Rainbow_Bridge_%28Tokyo%29_at_night_8.jpg"
    },
    {
      "cityID": "C004",
      "cityName": "New York City",
      "cityDescription": "A melting pot of cultures, known for its iconic skyline, Broadway shows, and world-class museums.",
      "placesToSee": [
        "Statue of Liberty",
        "Times Square",
        "Central Park",
        "Empire State Building"
      ],
      "price":100000,
      "btntype":"btn-danger",
      "rating": 1,
      "show_image"  : "hidden",
      "button_name" : "hide",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Jersey_City_Skyline_September_2025_038_%28cropped%29.jpg/330px-Jersey_City_Skyline_September_2025_038_%28cropped%29.jpg"
    },
    {
      "cityID": "C005",
      "cityName": "Amsterdam",
      "cityDescription": "A historic city with stunning architecture, charming canals, and a laid-back atmosphere.",
      "placesToSee": [
        "Anne Frank House",
        "Rijksmuseum",
        "Van Gogh Museum",
        "Jordaan District"
      ],
      "price":35000,
      "btntype":"btn-danger",
      "rating": 2,
      "show_image"  : "hidden",
      "button_name" : "hide",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Amsterdam_Canals_-_July_2006.jpg/330px-Amsterdam_Canals_-_July_2006.jpg"
    },
    {
      "cityID": "C006",
      "cityName": "Barcelona",
      "cityDescription": "A magical city known for its vibrant street art, delicious food, and the stunning Sagrada Familia.",
      "placesToSee": [
        "Sagrada Familia",
        "Park Güell",
        "Gothic Quarter",
        "La Rambla"
      ],
      "price":30000,
      "btntype":"btn-danger",
      "rating": 2.5,
      "show_image"  : "hidden",
      "button_name" : "hide",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941_%28cropped%29.jpg/250px-%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941_%28cropped%29.jpg"
    },
    {
      "cityID": "C007",
      "cityName": "Istanbul",
      "cityDescription": "A city of contrasts, blending ancient history with a modern, cosmopolitan vibe, famous for its grand bazaars and mosques.",
      "placesToSee": [
        "Hagia Sophia",
        "Blue Mosque",
        "Grand Bazaar",
        "Topkapi Palace"
      ],
      "price":45000,
      "btntype":"btn-danger",
      "rating": 3,
      "show_image"  : "hidden",
      "button_name" : "hide",
      "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Istanbul_%2834223582516%29_%28cropped%29.jpg/500px-Istanbul_%2834223582516%29_%28cropped%29.jpg"
    }

  ]
  getTravelDestinationById(cityid:string):TravelObjectType[]{
      return this.TravelDestinationObjArray.filter(n=>n.cityID==cityid);
  }
  getAllDestinationRecord():TravelObjectType[]{
    return this.TravelDestinationObjArray;
  }
}
