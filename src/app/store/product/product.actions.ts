import { createAction, props } from "@ngrx/store";
import { Product } from "src/app/models/product.model";

export const addProduct = createAction('[Product Component] addProduct', props<{product: Product}>());
export const removeProduct = createAction('[Product Component] removeProduct', props<{id: string}>());
