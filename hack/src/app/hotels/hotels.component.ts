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

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    if (this.destination && this.checkin && this.checkout) {
      this.status = true;
    }
  }


  UpdateText() {
    $("#btn-3").text("SELECTED");
    $("#btn-3").css("background-color","green");
  }
}
