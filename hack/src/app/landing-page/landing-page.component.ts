import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ng-carousel-cdk';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HackService } from '../services/hack.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [NgbCarouselConfig]
})
export class LandingPageComponent implements OnInit {  
  searchString: any = '';
  nameList = [
    {
      name:'Greece', image: 'Greece.png'
    },{
      name: 'Australia', image: 'Aus.png',
    },{
      name: 'Turkey', image: 'turkey.png',
    },{
      name: 'Europe', image: 'europe.png'
    }]

  trendingList = [
    {
      name:'Greece', image: 'maldives.png'
    },{
      name: 'Australia', image: 'Aus.png',
    },{
      name: 'Turkey', image: 'turkey.png',
    },{
      name: 'Europe', image: 'europe.png'
    }]
  cards = [
    {
      title: "Past Travels", value: "15"
    },{
      title: "Wishlist", value: "2"
    },{
      title: "MyBookings", value: "0"
    },{
      title: "Favourites", value: "15"
    },{
      title: "Events", value: "New Year"
    }
  ]

  constructor(config: NgbCarouselConfig, private router: Router, private http: HttpClient, private hackSerice: HackService) { }

  ngOnInit(): void { }

  search() {
    if (this.searchString) {
      this.router.navigate(['/list', { packageName: this.searchString }]);
    }
  }

  navigate(name: string) {
    this.hackSerice.updatedPackage(name);
    this.router.navigate(['/list', { packageName: name }]);
  }

}
