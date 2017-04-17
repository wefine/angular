import { NgModule } from "@angular/core";
import { ProductDataService } from "./product-data.service";
import { ProductRepositoryService } from "./product-repository.service";

@NgModule({
    providers: [
        ProductDataService,
        ProductRepositoryService
    ],
    declarations: []
})
export class ProductModule {
}
