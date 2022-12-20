import { Component, OnInit } from '@angular/core';
import { RetailerService } from 'src/app/services/retailer.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-mint-nft',
  templateUrl: './mint-nft.component.html',
  styleUrls: ['./mint-nft.component.css']
})
export class MintNftComponent implements OnInit {
  retailers: any;
  retailerName: any;
  amount: any;

  constructor(private retailerService: RetailerService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.retrieveRetailers();
  }

  retrieveRetailers() {
    this.retailerService.getAll()
      .subscribe(
        data => {
          this.retailers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  mintTokens() {
    console.log("mint tokens function");
    const data = {
      retailerName: this.retailerName,
      amount: this.amount
    };
   
    this.tokenService.create(data)
      .subscribe(
        response => {
          console.log(response);
          // this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

}
