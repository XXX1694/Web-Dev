import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../modules/product.model";

@Component({
  selector: "app-product-item",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-item.component.html",
  styleUrls: ["./product-item.component.css"],
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  share(product: Product, platform: string) {
    const message = encodeURIComponent(
      `Check out this product: ${product.name} - ${product.link}`
    );
    let url = "";

    if (platform === "whatsapp") {
      url = `https://api.whatsapp.com/send?text=${message}`;
    } else if (platform === "telegram") {
      url = `https://t.me/share/url?url=${message}`;
    }
    window.open(url, "_blank");
  }

  onRemove() {
    this.remove.emit(this.product.id);
  }

  onLike() {
    this.like.emit(this.product.id);
  }
}
