import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  errorMessage: string = '';

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
      const { name, email, password } = this.signupForm.value;
      this.authService.signUp(name, email, password).subscribe({

       next: (        response: any) => {
          console.log('Signup successful', response);
          this.router.navigate(['/signin']);
        },
        // (        error: { error: { message: string; }; }) => {
        //   console.error('Signup error', error);
        //   this.errorMessage = error.error.message || 'An error occurred during signup';
        // }
    });
    }
  }
}