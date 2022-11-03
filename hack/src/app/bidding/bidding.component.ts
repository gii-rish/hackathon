import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { HackService } from '../services/hack.service';

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.scss']
})
export class BiddingComponent implements OnInit {

  constructor(private hackService: HackService) { }

  flightInfo: any = [];

  ngOnInit(): void {
    this.getFlight();
  }

  UpdateText() {
    $("#btn-3").text("SUBMITTED");
    $("#btn-3").css("background-color","green");
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

  changeColor(id: any){
    $("#"+String(id)).css("background-color","green");
  }

}
