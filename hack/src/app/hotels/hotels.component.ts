import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit {

  destination: any;
  checkin: any;
  checkout: any;
  status: boolean = false;

  hotelList = [
    {
      image: "hotel-1.png",
      name: "Hilton Garden New Wing",
      offering: [
        'Breakfast',
        'Free WiFi',
        'Convenience store'
      ],
      price: '58,506'
    },
    {
      image: "hotel-2.png",
      name: "Cabana El Condor - Complejo El Taller",
      offering: [
        'Breakfast',
        'Free WiFi',
        'Free Parking'
      ],
      price: '46,609'
    },
    {
      image: "hotel-3.png",
      name: "Fairmont Banff Springs",
      offering: [
        'Breakfast',
        'Free WiFi',
        'Parking'
      ],
      price: '51,452'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    if (this.destination && this.checkin && this.checkout) {
      this.status = true;
    }
  }

  UpdateText(index: any) {
    localStorage.setItem('hotel', JSON.stringify({name: "Hotels", id: index}));
    var t = "#"+String(index)
    $(t).text("SELECTED");
    $(t).css("background-color","green");
  }
}
