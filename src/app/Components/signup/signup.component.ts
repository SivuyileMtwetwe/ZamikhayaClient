// signup.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';
import { SharedService } from '../../Services/Shared/shared.service';
import { User } from '../../Interfaces/user';
import { Signup } from '../../Interfaces/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  errorMessage: string = '';
  data!: Signup;
  
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private sharedService: SharedService
  ) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSignup(): void {
    if (this.signupForm.valid) {
      const {data} = this.signupForm.value;
      this.authService.signUp(data).subscribe(
        (        response: User) => {
          console.log('Signup successful', response);
          this.sharedService.setShowTerms(true);
          this.router.navigate(['/terms-and-conditions']);
        },
        // (        error: { error: { message: string; }; }) => {
        //   console.error('Signup error', error);
        //   this.errorMessage = error.error.message || 'An error occurred during signup';
        // }
      );
    }
  }
}