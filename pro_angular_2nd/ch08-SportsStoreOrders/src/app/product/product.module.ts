import { NgModule } from "@angular/core";
import { ProductDataService } from "./product-data.service";
import { ProductRepositoryService } from "./product-repository.service";
import { CartService } from "./cart.service";
import { OrderService } from "./order.service";
import { OrderRepositoryService } from "./order-repository.service";

@NgModule({
    providers: [
        ProductDataService,
        ProductRepositoryService,
        CartService,
        OrderService,
        OrderRepositoryService
    ],
    declarations: []
})
export class ProductModule {
}
