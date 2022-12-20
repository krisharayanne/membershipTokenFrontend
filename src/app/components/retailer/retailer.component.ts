import { Component, OnInit } from '@angular/core';
import { RetailerService } from 'src/app/services/retailer.service';

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {
  retailer = {
    name: '',
    membershipPerks: '',
    NFTvalueInMatic: 0.0
  };
  submitted = false;

  constructor(private retailerService: RetailerService) { }

  ngOnInit(): void {
    
  }

  saveRetailer() {
    const data = {
      name: this.retailer.name,
      membershipPerks: this.retailer.membershipPerks,
      NFTvalueInMatic: this.retailer.NFTvalueInMatic,
    };
    this.retailerService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newRetailer() {
    this.submitted = false;
    this.retailer = {
      name: '',
      membershipPerks: '',
      NFTvalueInMatic: 0.0
    };
  }

}
