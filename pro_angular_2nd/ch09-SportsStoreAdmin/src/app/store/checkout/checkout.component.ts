import { Component, OnInit } from "@angular/core";
import { OrderService } from "../../product/order.service";
import { NgForm } from "@angular/forms";
import { OrderRepositoryService } from "../../product/order-repository.service";

@Component({
    selector: 'app-checkout',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

    ngOnInit() {
    }

    orderSent: boolean = false;
    submitted: boolean = false;

    constructor(
        public repository: OrderRepositoryService,
        public order: OrderService) {
    }

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(order => {
                this.order.clear();
                this.orderSent = true;
                this.submitted = false;
            });
        }
    }
}
