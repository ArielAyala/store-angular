import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fecthProduct(id);
      //this.product = this.productsService.getProduct(id);
    });
  }

  fecthProduct(id: string) {
    this.productsService.getProduct(id)
      .subscribe(product => {
        this.product = product;
      })
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'nuevo desde angular',
      image: 'assets/images/banner-1.jpg',
      price: 3000,
      description: 'Nuevo producto listo'
    }
    this.productsService.createProduct(newProduct)
      .subscribe(product => {
        console.log(product)
      })
  }

  updateProduct() {
    const updateProduct: Partial<Product> = {
      price: 5000,
      description: 'Edicion titulo'
    }
    this.productsService.updateProduct('2', updateProduct)
      .subscribe(product => {
        console.log(product);
      })
  }

  deleteProduct() {
    this.productsService.deleteProduct('2')
      .subscribe(respuesta => {
        console.log(respuesta);
      })
  }


}
