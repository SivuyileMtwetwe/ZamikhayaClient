// signin.component.ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      remember: [false]
    });
  }

  onSignin() {
    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;
      this.authService.signIn(email, password).subscribe( {
        next:(response: any) => {
          console.log('Sign-in successful', response);
          // You might want to store the token or user info here
          // localStorage.setItem('token', response.token);
          this.router.navigate(['/homepage']);
      }
        
        
        },
        // (error: { error: { message: string; }; }) => {
        //   console.error('Sign-in failed', error);
        //   console.error('Error details:', error.error);
        //   this.errorMessage = error.error.message || 'An error occurred during sign-in';
        // }
      );
    }
  }
}