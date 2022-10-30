import { Component } from "@angular/core";
import { Product } from "../models/Product";
@Component({
    selector: 'ProductList',
    templateUrl: './productlist.html',
    styleUrls: ['./productlist.scss']
})

export class ProductList {
    products: Product[];
    constructor() {
        this.products = this.getProductList();
    }

    getProductList() {
        let productlist = [];
        let names = ['Iphone', 'LG', 'Samsung'];
        let descriptions = ['It is a great phone with many features', 'Its a great brand with mulitple models', 'Beautiful phone with multiple features'];
        for (let i = 0; i < 3; i++) {
            let product = new Product();
            product.description = descriptions[i];
            product.name = names[i];
            product.id = i;
            productlist.push(product);
        }
        console.log(productlist);
        return productlist;
    }
}