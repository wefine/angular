import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { StoreComponent } from "./store.component";
import { ProductModule } from "../product/product.module";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ProductModule
    ],
    declarations: [StoreComponent],
    exports: [StoreComponent]
})
export class StoreModule {
}
