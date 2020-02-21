import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from './../product/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [
    {
      name: 'Hamburguesa',
      description: 'Hamburguesa doble carne, doble queso, doble todo, bien mela',
      img: 'assets/burger.jpg',
      price: 11500
    },
    {
      name: 'Lasagna',
      description: 'Lasagna mixta con carne y pollo, bien mela',
      img: 'assets/lasagna.jpg',
      price: 12000
    },
    {
      name: 'Alitas x6',
      description: 'Seis alitas bañadas en la salsa que quieras',
      img: 'assets/alas.jpg',
      price: 8900
    }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  clickProduct(id: number) {
    console.log('Product');
    console.log(id);
    this.router.navigate([`/products/${id}`]);
  }

  newProduct() {
    this.router.navigate([`/product-edit`]);
  }

}
