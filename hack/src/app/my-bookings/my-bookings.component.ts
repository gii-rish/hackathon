import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit {

  color = 'red';
  color1 = 'red';
  color2 = 'red';

  constructor() { }

  ngOnInit(): void {
  }

}
