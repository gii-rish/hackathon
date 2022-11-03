import { Component, OnInit } from '@angular/core';
import { HackService } from '../services/hack.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  hotelInfo: any = [];
  flightInfo: any = [];

  constructor(private hackService: HackService) { }

  ngOnInit(): void {
    this.getHotel();
    this.getFlight();
  }

  getHotel(){
    let data = JSON.parse(localStorage.getItem("hotel") || '{}');
    if (Object.entries(data).length !== 0) {
      this.hackService.getSinglePackage(data['name'], data['id']+1).subscribe( data => {
      this.hotelInfo = [data];
      console.log("hotel: ", data);
    })
    }
  }

  getFlight(){
    let data = JSON.parse(localStorage.getItem("flight") || '{}');
    if (Object.entries(data).length !== 0) {
      this.hackService.getSinglePackage(data['name'], data['id']+1).subscribe( data => {
      this.flightInfo = [data];
      console.log("flight: ", data);
    })
    }
  }

}
