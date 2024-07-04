// signup.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSignup() {
    if (this.signupForm.valid) {
      const { name, email, password } = this.signupForm.value;
      this.userService.signup(name, email, password).subscribe(
        (response: any) => {
          console.log('Sign-up successful', response);
          this.successMessage = 'Sign-up successful! Redirecting to sign-in page...';
          setTimeout(() => {
            this.router.navigate(['/signin']);
          }, 2000);
        },
        // (error: { error: { message: string; }; }) => {
        //   console.error('Sign-up failed', error);
        //   console.error('Error details:', error.error);
        //   this.errorMessage = error.error.message || 'An error occurred during sign-up';
        // }
      );
    }
  }
}