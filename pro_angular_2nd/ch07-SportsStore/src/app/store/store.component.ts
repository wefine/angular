import { Component, OnInit } from "@angular/core";

import { Product } from "../product/product.model";
import { ProductRepositoryService } from "../product/product-repository.service";

@Component({
    selector: 'store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
    public selectedCategory = null;

    constructor(private repository: ProductRepositoryService) {
    }

    get products(): Product[] {
        console.log(this.selectedCategory);

        return this.repository.getProducts(this.selectedCategory);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    ngOnInit() {
    }

}
