import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';

import { StoreComponent } from "./store.component";
import { ProductModule } from "../product/product.module";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { CartDetailComponent } from "./cart-detail/cart-detail.component";
import { CheckoutComponent } from "./checkout/checkout.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ProductModule,
        RouterModule
    ],
    declarations: [
        CartDetailComponent,
        CartSummaryComponent,
        CheckoutComponent,
        CounterDirective,
        StoreComponent,
    ],
    exports: [
        StoreComponent,
        CartDetailComponent,
        CheckoutComponent,
    ]
})
export class StoreModule {
}
