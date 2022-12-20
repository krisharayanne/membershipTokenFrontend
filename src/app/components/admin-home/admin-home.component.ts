import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  TOKEN_KEY = 'auth-token';
  user = {
    accessToken: sessionStorage.getItem(this.TOKEN_KEY),
  };
  submitted = false;

  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    const data = {
      accessToken: this.user.accessToken,
    };
    this.authenticationService.verifyToken(data)
      .subscribe(
        response => {
          console.log(response);
          let objectArray = Object.values(response);
          this.submitted = true;
          if(objectArray[1] == 'admin') {
            console.log("You're authorized as an admin!")
          }
          else if(objectArray[1] == 'user') {
            console.log("You're not authorized to access this page because you are just a general user!")
          }
        },
        error => {
          console.log(error);
        });
  }

}
