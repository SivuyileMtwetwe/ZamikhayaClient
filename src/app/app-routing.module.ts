import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { IntroComponent } from './Components/intro/intro.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { PasswordRecoveryComponent } from './Components/password-recovery/password-recovery.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { PropertiesComponent } from './Components/properties/properties.component';
import { PropertyDetailComponent } from './Components/property-details/property-details.component';
import { FavouriteComponent } from './Components/favourite/favourite.component';
import { MessagesComponent } from './BusinessComponents/messages/messages.component';
import { ListingComponent } from './BusinessComponents/listing/listing.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { DashboardComponent } from './BusinessComponents/dashboard/dashboard.component';

import { HomeviewComponent } from './BusinessComponents/homeview/homeview.component';
import { AddPropertyComponent } from './BusinessComponents/add-property/add-property.component';
import { MapviewComponent } from './Components/mapview/mapview.component';
import { ListDetailComponent } from './BusinessComponents/list-detail/list-detail.component';
import { TermsAndConditionsComponent } from './Components/terms-and-conditions/terms-and-conditions.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'homepage', component:HomepageComponent},
  {path: 'one-card', component: PropertiesComponent },
  { path: 'profile', component: ProfileComponent},
  { path: 'homeview', component: HomeviewComponent},
  { path: 'mapview', component: MapviewComponent},
  { path: 'add-property', component: AddPropertyComponent},
  // { path: '**', redirectTo: '' },
  { path: 'property-details/:id', component: PropertyDetailComponent },
  {path: 'favourite',component: FavouriteComponent},
  // { path: '**', redirectTo: '' },
  { path: 'property-details/:id', component: PropertyDetailComponent },
  {path: 'favourite',component: FavouriteComponent},
  {path:'messages', component:MessagesComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'listing', component:ListingComponent},
  {path: 'list-detail/:id', component:ListDetailComponent },
  { path: 'terms-and-conditions', component:TermsAndConditionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }