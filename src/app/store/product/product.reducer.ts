import { createReducer, on } from '@ngrx/store';
import * as productActions from './product.actions';
import { Product } from 'src/app/models/product.model';

export const initialState: ReadonlyArray<Product> = [];
export const productReducer = createReducer(
  initialState,
  on(productActions.addProduct, (state, { product }) => [...state, product]),
  on(productActions.removeProduct, (state, { id }) =>
    state.filter((product) => product.id !== id)
  )
);
