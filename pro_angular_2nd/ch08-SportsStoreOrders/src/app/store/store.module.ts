import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { StoreComponent } from "./store.component";
import { ProductModule } from "../product/product.module";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ProductModule
    ],
    declarations: [StoreComponent, CounterDirective, CartSummaryComponent],
    exports: [StoreComponent]
})
export class StoreModule {
}
