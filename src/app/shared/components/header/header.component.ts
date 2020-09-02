import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  total: number = 0;

  constructor(
    private cartService: CartService
  ) {
    this.cartService.cart$
      .pipe(
        map(products => products.length)
      )
      .subscribe(total => {
        this.total = total;
      })
  }

  ngOnInit() {
  }

}
