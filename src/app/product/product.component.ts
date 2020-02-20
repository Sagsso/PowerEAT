import { Component, OnInit } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = {
    name: 'Hamburguesa',
    description: 'Hamburguesa doble carne, doble queso, doble todo, bien mela',
    img: 'assets/burger.jpg',
    price: 11500
  }

  constructor() { }

  ngOnInit() {
  }

}
