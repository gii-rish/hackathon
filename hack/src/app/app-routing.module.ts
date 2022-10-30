import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiddingComponent } from './bidding/bidding.component';
import { DetailsPageComponent } from './details-page/details-page.component';
import { FlightsComponent } from './flights/flights.component';
import { HotelsComponent } from './hotels/hotels.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { LoginComponent } from './login/login.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { TaxiComponent } from './taxi/taxi.component';

const routes: Routes = [
  { path: '', component: LoginComponent,  pathMatch: 'full' },
  { path: 'landingPage', component: LandingPageComponent,  pathMatch: 'full' },
  { path: 'detailsPage', component: DetailsPageComponent },
  { path: 'list', component: ListingPageComponent},
  { path: 'my-booking', component: MyBookingsComponent },
  { path: 'taxi', component: TaxiComponent },
  { path: 'hotels', component: HotelsComponent },
  { path: 'flights', component: FlightsComponent },
  { path: 'bid', component: BiddingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
