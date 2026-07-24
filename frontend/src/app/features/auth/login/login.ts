import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  loginData = {
    email: '',
    password: ''
  };


  errorMessage = '';
  loading = false;


  constructor(
    private authService: AuthService,
    private router: Router
  ) {}



  login() {


    this.errorMessage = "";


    if (!this.loginData.email || !this.loginData.password) {

      this.errorMessage = "Please enter email and password";
      return;

    }


    this.loading = true;



    this.authService.login(this.loginData)
    .subscribe({

      next: (response) => {


        console.log("Login Success:", response);


        // Save JWT token
        this.authService.saveToken(
          response.token
        );


        this.loading = false;


        // Navigate after login
        this.router.navigate([
          '/dashboard'
        ]);


      },


      error: (error) => {


        console.log("Login Error:", error);


        this.loading = false;


        this.errorMessage =
          error.error?.message || "Login failed";


      }


    });


  }


}