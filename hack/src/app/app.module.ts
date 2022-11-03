import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CarouselModule } from 'ng-carousel-cdk';
import { DetailsPageComponent } from './details-page/details-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { HotelsComponent } from './hotels/hotels.component';
import { TaxiComponent } from './taxi/taxi.component';
import { FlightsComponent } from './flights/flights.component';
import { BiddingComponent } from './bidding/bidding.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LandingPageComponent,
    DetailsPageComponent,
    ListingPageComponent,
    NavbarComponent,
    MyBookingsComponent,
    HotelsComponent,
    TaxiComponent,
    FlightsComponent,
    BiddingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    CarouselModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
