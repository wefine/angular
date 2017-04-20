import { NgModule } from "@angular/core";
import { ProductDataService } from "./product-data.service";
import { ProductRepositoryService } from "./product-repository.service";
import { CartService } from "./cart.service";

@NgModule({
    providers: [
        ProductDataService,
        ProductRepositoryService,
        CartService
    ],
    declarations: []
})
export class ProductModule {
}
