import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-bidding',
  templateUrl: './bidding.component.html',
  styleUrls: ['./bidding.component.scss']
})
export class BiddingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    UpdateText() {
    $("#btn-3").text("SUBMITTED");
    $("#btn-3").css("background-color","green");
  }

}
