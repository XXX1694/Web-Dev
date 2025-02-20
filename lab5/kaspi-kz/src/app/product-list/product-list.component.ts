import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../modules/product.model";
import { ProductItemComponent } from "../product-item/product-item.component";

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  @Input() products: Product[] = [];

  removeProduct(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  updateLikes(id: number) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      product.likes++;
    }
  }
}
