import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPageComponent } from './details-page/details-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent,  pathMatch: 'full' },
  { path: 'landingPage', component: LandingPageComponent,  pathMatch: 'full' },
  { path: 'detailsPage', component: DetailsPageComponent },
  { path: 'list', component: ListingPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
