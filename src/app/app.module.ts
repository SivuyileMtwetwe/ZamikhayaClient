import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { SignupComponent } from './Components/signup/signup.component';
import { SigninComponent } from './Components/signin/signin.component';
import { LandingComponent } from './Components/landing/landing.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { IntroComponent } from './Components/intro/intro.component';
import { PasswordRecoveryComponent } from './Components/password-recovery/password-recovery.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { SettingsComponent } from './Components/settings/settings.component';


import { PropertiesComponent } from './Components/properties/properties.component';
import { FilteringComponent } from './Components/filtering/filtering.component';
import { FeaturedComponent } from './Components/featured/featured.component';
import { HeaderComponent } from './Components/header/header.component';
// import { BottomNavComponent } from './Components/bottom-nav/bottom-nav.component';
import { NgFor } from '@angular/common';
import { PropertyDetailComponent } from './Components/property-details/property-details.component';
import { FavouriteComponent } from './Components/favourite/favourite.component';
import { MessagesComponent } from './BusinessComponents/messages/messages.component';
import { ListingComponent } from './BusinessComponents/listing/listing.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    LandingComponent,
    WelcomeComponent,
    IntroComponent,
    PasswordRecoveryComponent,
    HomepageComponent,
    NavbarComponent,
    SettingsComponent,
    PropertiesComponent,
    FilteringComponent,
    FeaturedComponent,
    HeaderComponent,
    // BottomNavComponent,
    PropertyDetailComponent,
    FavouriteComponent,
    MessagesComponent,
    ListingComponent
    
  
   
  ],

  imports: [ 
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgFor,  
    HttpClientModule
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
