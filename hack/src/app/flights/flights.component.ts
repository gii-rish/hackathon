import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.scss']
})
export class FlightsComponent implements OnInit {

  from : any;
  to: any;
  departure: any;
  adults: any;
  status: boolean = false;
  value = 'submitted';

  flights = [
    {
      flightNo: "AL2398",
      startTime: "00.50",
      source: "BLR",
      endTime: "13.40",
      destination: "CDG",
      price: "38,558",
      loadFactor: "30%",
      probability: "72%",
      color: {"background-color": "green"}
    },
    {
      flightNo: "KE0890",
      startTime: "13.15",
      source: "BLR",
      endTime: "23.10",
      destination: "CDG",
      price: "62,024",
      loadFactor: "60%",
      probability: "33%",
      color: {"background-color": "red"}
    },
    {
      flightNo: "JA0890",
      startTime: "10.05",
      source: "BLR",
      endTime: "20.52",
      destination: "CDG",
      price: "58,506",
      loadFactor: "72%",
      probability: "22%",
      color: {"background-color": "red"}
    },
    {
      flightNo: "EY1020",
      startTime: "11.25",
      source: "BLR",
      endTime: "21.50",
      destination: "CDG",
      price: "61,476",
      loadFactor: "55%",
      probability: "40%",
      color: {"background-color": "orange"}
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    if (this.from && this.to && this.departure) {
      this.status = true;
    }
  }

    UpdateText(index: any) {
      localStorage.setItem('flight', JSON.stringify({name: "Flights", id: index}));
      var t = "#"+String(index)
      $(t).text("SELECTED");
      $(t).css("background-color","green");
  }

}
