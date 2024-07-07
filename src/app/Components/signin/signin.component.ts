import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth/auth.service';
import { User } from '../../Interfaces/user';
import { Signin } from '../../Interfaces/signin';

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

  onSignin(data:Signin): void {
    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;
      this.authService.signIn(data).subscribe({

        next: (        response: User) => {
          console.log('Signin successful', response);
          this.router.navigate(['/homepage']);
        },
    });
    }
  }
}