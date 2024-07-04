import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false]
    });
  }

  ngOnInit(): void {}

  onSignin(): void {
    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;
      this.authService.signIn(email, password).subscribe(
        (        response: any) => {
          console.log('Signin successful', response);
          this.router.navigate(['/homepage']);
        },
        (        error: { error: { message: string; }; }) => {
          console.error('Signin error', error);
          this.errorMessage = error.error.message || 'An error occurred during signin';
        }
      );
    }
  }
}