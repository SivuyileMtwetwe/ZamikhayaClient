import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './Components/signup/signup.component';
import { SigninComponent } from './Components/signin/signin.component';
import { LandingComponent } from './Components/landing/landing.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { IntroComponent } from './Components/intro/intro.component';
import { PasswordRecoveryComponent } from './Components/password-recovery/password-recovery.component';
import { HomepageComponent } from './Components/homepage/homepage.component';
<<<<<<< HEAD
import { HeaderComponent } from './Components/header/header.component';
=======
import { FilteringComponent } from './Components/filtering/filtering.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { MapviewComponent } from './Components/mapview/mapview.component';
import { FavouriteComponent } from './Components/favourite/favourite.component';
import { FeaturedComponent } from './Components/featured/featured.component';

>>>>>>> bfb7885e5a3bb454cfe8c719e783e8bec238395e
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
<<<<<<< HEAD
    NavbarComponent,
    HeaderComponent
=======
    FilteringComponent,
    NavbarComponent,
    ProfileComponent,
    MapviewComponent,
    FavouriteComponent,
    FeaturedComponent
>>>>>>> bfb7885e5a3bb454cfe8c719e783e8bec238395e
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
