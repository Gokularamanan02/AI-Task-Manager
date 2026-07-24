import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './signup.html',
  styleUrl: './signup.css'
})
export class Signup {

  signupData = {
    name: '',
    email: '',
    password: ''
  };

  errorMessage = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  signup() {

    this.errorMessage = '';

    if (
      !this.signupData.name ||
      !this.signupData.email ||
      !this.signupData.password
    ) {
      this.errorMessage = 'All fields are required';
      return;
    }

    this.loading = true;

    this.authService.signup(this.signupData).subscribe({

      next: (response) => {

        console.log("Signup Success:", response);

        this.loading = false;

        alert("Signup Successful");

        this.router.navigate(['/login']);

      },

      error: (error) => {

        console.log(error);

        this.loading = false;

        this.errorMessage =
          error.error?.message || "Signup failed";

      }

    });

  }

}