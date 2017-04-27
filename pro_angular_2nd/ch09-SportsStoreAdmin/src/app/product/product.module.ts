import { NgModule } from "@angular/core";
import { ProductDataService } from "./product-data.service";
import { ProductRepositoryService } from "./product-repository.service";
import { CartService } from "./cart.service";
import { OrderService } from "./order.service";
import { OrderRepositoryService } from "./order-repository.service";
import { HttpModule } from "@angular/http";
import { RestDataService } from "./rest-data.service";

@NgModule({
    imports: [
        HttpModule
    ],
    providers: [
        ProductRepositoryService,
        CartService,
        OrderService,
        OrderRepositoryService,

        {provide: ProductDataService, useClass: RestDataService},
    ],
    declarations: []
})
export class ProductModule {
}
