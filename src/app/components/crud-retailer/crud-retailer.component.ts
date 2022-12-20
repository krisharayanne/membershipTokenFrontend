import { Component, OnInit } from '@angular/core';
import { RetailerService } from 'src/app/services/retailer.service';

@Component({
  selector: 'app-crud-retailer',
  templateUrl: './crud-retailer.component.html',
  styleUrls: ['./crud-retailer.component.css']
})
export class CrudRetailerComponent implements OnInit {
  retailers: any;

  constructor(private retailerService: RetailerService) { }

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
}
