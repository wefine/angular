import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { StoreComponent } from "./store.component";
import { ProductModule } from "../product/product.module";
import { CounterDirective } from "./counter.directive";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ProductModule
    ],
    declarations: [StoreComponent, CounterDirective],
    exports: [StoreComponent]
})
export class StoreModule {
}
