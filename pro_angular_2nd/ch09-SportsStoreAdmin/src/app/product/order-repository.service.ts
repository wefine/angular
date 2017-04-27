import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";

import { OrderService } from "./order.service";
import { ProductDataService } from "./product-data.service";

@Injectable()
export class OrderRepositoryService {

    private orders: OrderService[] = [];

    constructor(private dataSource: ProductDataService) {
    }

    getOrders(): OrderService[] {
        return this.orders;
    }

    saveOrder(order: OrderService): Observable<OrderService> {
        return this.dataSource.saveOrder(order);
    }
}
