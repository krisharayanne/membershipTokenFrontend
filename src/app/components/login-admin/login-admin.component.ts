import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  admin = {
    email: '',
    password: '',
  };
  submitted = false;
  TOKEN_KEY = 'auth-token';

  constructor(private userService: UserService) {  }

  ngOnInit(): void {
  }

  verifyCredentials(){
    console.log("verify credentials function");
    const data = {
      email: this.admin.email,
      password: this.admin.password
    };
    this.userService.verifyCredentials(data)
      .subscribe(
        response => {
          console.log(response);
          let objectArray = Object.values(response);
          this.submitted = true;
          window.sessionStorage.removeItem(this.TOKEN_KEY);
    window.sessionStorage.setItem(this.TOKEN_KEY, objectArray[0]);
        },
        error => {
          console.log(error);
        });
  }

}
