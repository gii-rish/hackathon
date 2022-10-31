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

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    if (this.from && this.to && this.departure) {
      this.status = true;
    }
  }

    UpdateText() {
    $("#btn-2").text("SELECTED");
    $("#btn-2").css("background-color","green");
  }

}
