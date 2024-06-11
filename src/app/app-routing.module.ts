// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Components/landing/landing.component';
import { IntroComponent } from './Components/intro/intro.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';
import { PasswordRecoveryComponent } from './Components/password-recovery/password-recovery.component'; // Import the PasswordRecoveryComponent
import { HomepageComponent } from './Components/homepage/homepage.component';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'intro', component: IntroComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'homepage', component:HomepageComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
