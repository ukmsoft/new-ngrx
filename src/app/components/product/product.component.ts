import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { productState } from 'src/app/store/product/product.selectors';
import * as productActions from '../../store/product/product.actions';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  products$: Observable<ReadonlyArray<Product>>;

  constructor(private store: Store<{ products: ReadonlyArray<Product> }>) {
    this.products$ = this.store.select(productState);
  }

  addProduct() {
    const rnd = Date.now().toString();
    const product: Product = { id: rnd, name: 'product' + rnd, price: 100 };
    this.store.dispatch(productActions.addProduct({ product }));
  }

  removeProduct(id: string) {
    this.store.dispatch(productActions.removeProduct({ id }));
  }
}
