import { Component,Input } from "@angular/core";
import { Product } from "src/store/models/Product";

@Component({
    selector: 'Product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent {
    @Input() product: Product = new Product();

}