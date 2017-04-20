import { Component } from "@angular/core";

import { Product } from "../product/product.model";
import { ProductRepositoryService } from "../product/product-repository.service";
import { CartService } from "../product/cart.service";

@Component({
    selector: 'store',
    templateUrl: './store.component.html',
    styleUrls: ['./store.component.css']
})
export class StoreComponent {
    public selectedCategory = null;
    public productsPerPage = 4;
    public selectedPage = 1;

    constructor(
        private repository: ProductRepositoryService,
        private cart: CartService) {
    }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;

        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productsPerPage);
    }

    get categories(): string[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageNumbers(): number[] {
        return Array(
            Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage)
        ).fill(0).map((x, i) => i + 1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository
                .getProducts(this.selectedCategory).length / this.productsPerPage)
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
    }
}
