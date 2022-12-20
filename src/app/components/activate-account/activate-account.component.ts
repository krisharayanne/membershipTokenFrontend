import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {
  enteredOtp = new FormControl('', [Validators.required]);
otp: any;
email: any;
submitted = false;
  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    
   }

  ngOnInit(): void { 
    this.otp = this.route.snapshot.paramMap.get('otp');
    this.email = this.route.snapshot.paramMap.get('email');
    console.log(this.otp);
  }

  verifyOTP() {
    console.log(this.enteredOtp.value);
    if(this.enteredOtp.value == this.otp){
      console.log("Admin account has been activated!");

        const data = {
          email: this.email,
        };
        this.userService.updateAccountStatus(data)
          .subscribe(
            response => {
              console.log(response);
            },
            error => {
              console.log(error);
            });
      
    }
    else{
      console.log("Verification failure!");
    }
  }

  resendOTP() {
    const data = {
      email: this.email,
    };
    this.userService.generateOTPAndSendMail(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.otp = response;
        },
        error => {
          console.log(error);
        });
  }


}
