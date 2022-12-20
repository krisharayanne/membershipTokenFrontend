import { Component, OnInit } from '@angular/core';
import { WalletService } from 'src/app/services/wallet.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  title = 'ng-connect-ethereum-wallet';
  public walletConnected: boolean = false;
  public walletId: string = '';
  TOKEN_KEY = 'auth-token';
  user = {
    accessToken: sessionStorage.getItem(this.TOKEN_KEY),
  };
  submitted = false;

  constructor(private walletService: WalletService, private authenticationService:AuthenticationService) { }

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
            console.log("You're authorized as a user!")
          }
        },
        error => {
          console.log(error);
        });

    this.checkWalletConnected();
  }

  connectToWallet  = () => {
    this.walletService.connectWallet();
  }

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];
      console.log(this.walletId);
    }
  }

}
