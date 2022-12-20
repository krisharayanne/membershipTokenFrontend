import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.css']
})
export class RegisterAdminComponent implements OnInit {

  admin = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: ''
  };
  submitted = false; 

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  registerAdmin() {
    console.log("register admin function");
    const data = {
      firstName: this.admin.firstName,
      lastName: this.admin.lastName,
      email: this.admin.email,
      password: this.admin.password,
      birthDate: this.admin.birthDate,
    };
    this.userService.create(data)
      .subscribe(
        response => {
          console.log(response);
          let objectArray = Object.values(response);
          console.log("objectArray: " + objectArray); 
          this.submitted = true;
          this.router.navigate(['/activateAccounts', {email: objectArray[0], otp: objectArray[1]}]);
        },
        error => {
          console.log(error);
        });
  }

}
