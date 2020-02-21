import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Product } from './../product/product.model';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  isDisabled: boolean = true;
  isOpen: boolean = false;
  mode: string = 'edit';
  nameDefault: string = 'Nombre del producto';

  form: FormGroup;
  id: string;
  product: Product;

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
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params.id) {
        console.log('hholis')
        this.id = params.id;
        this.product = this.products[this.id];
        this.form.patchValue(this.product);
      }
    });
  }

  ngDoCheck() {

  }

  onEdit($event: Event) {
    $event.preventDefault();
    if (this.isDisabled) {
      this.isDisabled = false;
    } else {
      this.isDisabled = true;
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      img: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
    });
  }

}
