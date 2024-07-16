import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  onSignup(): void {
    if (this.signupForm.valid) {
      this.isLoading = true;
      this.errorMessage = '';
      const { name, email, password } = this.signupForm.value;
      this.authService.signUp(name, email, password).pipe(
        finalize(() => {
          this.isLoading = false;
        })
      ).subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          this.router.navigate(['/signin']);
        },
        error: (error) => {
          console.error('Registration error', error);
          if (error.error && error.error.message) {
            this.errorMessage = error.error.message;
          } else {
            this.errorMessage = 'An unexpected error occurred. Please try again.';
          }
        }
      });
    }
  }
}