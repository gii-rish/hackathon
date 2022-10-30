import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss']
})
export class ListingPageComponent implements OnInit {

  listItem: any;
  color = 'red';
  color1 = 'red';
  color2 = 'red';

  constructor(private router: Router) {
    this.listItem = [
      {
        location: 'New York',
        month: 'January',
        days: 4,
        budget: '500 USD',
      },
      {
        location: 'Chicago',
        month: 'January',
        days: 5,
        budget: '700 USD',
      },
      {
        location: 'San Francisco',
        month: 'February',
        days: 3,
        budget: '400 USD',
      },{
        location: 'Lag Vegas',
        month: 'March',
        days: 6,
        budget: '800 USD',
      }
    ]
  }
  
  ngOnInit(): void {    
  }

  cancel(){
    this.router.navigate(['/flights'])
  }

}
