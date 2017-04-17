import { inject, TestBed } from "@angular/core/testing";

import { ProductRepositoryService } from "./product-repository.service";

describe('ProductRepositoryService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProductRepositoryService]
        });
    });

    it('should ...', inject([ProductRepositoryService], (service: ProductRepositoryService) => {
        expect(service).toBeTruthy();
    }));
});
