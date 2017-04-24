import { Component, OnInit } from "@angular/core";
import { CartService } from "../../product/cart.service";

@Component({
    selector: 'cart-detail',
    templateUrl: './cart-detail.component.html',
    styleUrls: ['./cart-detail.component.css']
})
export class CartDetailComponent implements OnInit {

    constructor(public cart: CartService) {
    }

    ngOnInit() {
    }

}
