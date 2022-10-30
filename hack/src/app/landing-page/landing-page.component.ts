import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ng-carousel-cdk';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  providers: [NgbCarouselConfig]
})
export class LandingPageComponent implements OnInit {  

  images:any=[];
  searchString: any = '';

  ngOnInit(): void {
    this.images = ['../../assets/images/cr1.jpg', '../../assets/images/cr2.jpg', '../../assets/images/cr3.jpg', '../../assets/images/cr4.jpg', '../../assets/images/cr5.jpg', '../../assets/images/cr6.jpg']
  }

  // images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig, private router: Router) {
    // 
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  search() {
    console.log("searchString: ", this.searchString)
    if (this.searchString) {
      this.router.navigate(['/list'])
    }
  }

  navigate() {
    this.router.navigate(['/list'])
  }

}
