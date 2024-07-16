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
      this.authService.signUp(name, email, password).pipe(finalize(() => {
        // This will execute after a response is gotten whether an error or success. right place to hide a loader
      })).subscribe({
        next: (message) => {
          this.router.navigate(['/signin']);
        },
        error: (error) => {
          alert(error)
        }
      });
    }
  }
}