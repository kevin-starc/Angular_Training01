import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent {

  salesPersonList:SalesPerson[]=[

    new SalesPerson("Abrar","Pasha","ab@gmail.com",100000),
    new SalesPerson("Kevin","Starc","ks@gmail.com",50000),
    new SalesPerson("Ken","Adams","ka@gmail.com",80000),
    new SalesPerson("Barney","Stinson","bs@gmail.com",90000)

  ];

}
