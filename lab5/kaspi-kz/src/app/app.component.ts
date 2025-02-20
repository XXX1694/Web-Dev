import { Component, OnInit } from "@angular/core";
import { Category } from "./modules/category.model";

import { ProductListComponent } from "./product-list/product-list.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [ProductListComponent],
})
export class AppComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category | null = null;

  ngOnInit() {
    this.categories = this.getCategories();
  }

  getCategories(): Category[] {
    return [
      {
        id: 1,
        name: "Electronics",
        products: [
          {
            id: 101,
            name: "Samsung Galaxy S21",
            description:
              "Latest Samsung flagship smartphone with advanced features.",
            rating: 4.5,
            image: "https://via.placeholder.com/150?text=Samsung+S21",
            images: [
              "https://via.placeholder.com/300?text=Samsung+S21+Image1",
              "https://via.placeholder.com/300?text=Samsung+S21+Image2",
              "https://via.placeholder.com/300?text=Samsung+S21+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/samsung-galaxy-s21-123456/",
          },
          {
            id: 102,
            name: "Apple iPhone 13",
            description:
              "Experience the new era of iPhone with cutting edge technology.",
            rating: 4.8,
            image: "https://via.placeholder.com/150?text=iPhone+13",
            images: [
              "https://via.placeholder.com/300?text=iPhone+13+Image1",
              "https://via.placeholder.com/300?text=iPhone+13+Image2",
              "https://via.placeholder.com/300?text=iPhone+13+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/apple-iphone-13-654321/",
          },
          {
            id: 103,
            name: "Sony WH-1000XM4",
            description:
              "Industry-leading noise cancellation headphones from Sony.",
            rating: 4.7,
            image: "https://via.placeholder.com/150?text=Sony+WH-1000XM4",
            images: [
              "https://via.placeholder.com/300?text=Sony+WH-1000XM4+Image1",
              "https://via.placeholder.com/300?text=Sony+WH-1000XM4+Image2",
              "https://via.placeholder.com/300?text=Sony+WH-1000XM4+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/sony-wh-1000xm4-987654/",
          },
          {
            id: 104,
            name: "Dell XPS 13",
            description:
              "Ultra-portable laptop with powerful performance and sleek design.",
            rating: 4.6,
            image: "https://via.placeholder.com/150?text=Dell+XPS+13",
            images: [
              "https://via.placeholder.com/300?text=Dell+XPS+13+Image1",
              "https://via.placeholder.com/300?text=Dell+XPS+13+Image2",
              "https://via.placeholder.com/300?text=Dell+XPS+13+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/dell-xps-13-112233/",
          },
          {
            id: 105,
            name: "Bose SoundLink",
            description:
              "Portable Bluetooth speaker with impressive sound quality.",
            rating: 4.4,
            image: "https://via.placeholder.com/150?text=Bose+SoundLink",
            images: [
              "https://via.placeholder.com/300?text=Bose+SoundLink+Image1",
              "https://via.placeholder.com/300?text=Bose+SoundLink+Image2",
              "https://via.placeholder.com/300?text=Bose+SoundLink+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/bose-soundlink-445566/",
          },
        ],
      },
      {
        id: 2,
        name: "Home Appliances",
        products: [
          {
            id: 201,
            name: "LG Refrigerator",
            description: "Spacious refrigerator with smart cooling technology.",
            rating: 4.3,
            image: "https://via.placeholder.com/150?text=LG+Refrigerator",
            images: [
              "https://via.placeholder.com/300?text=LG+Refrigerator+Image1",
              "https://via.placeholder.com/300?text=LG+Refrigerator+Image2",
              "https://via.placeholder.com/300?text=LG+Refrigerator+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/lg-refrigerator-778899/",
          },
          {
            id: 202,
            name: "Samsung Washing Machine",
            description:
              "Efficient and quiet washing machine for modern households.",
            rating: 4.5,
            image:
              "https://via.placeholder.com/150?text=Samsung+Washing+Machine",
            images: [
              "https://via.placeholder.com/300?text=Samsung+Washing+Machine+Image1",
              "https://via.placeholder.com/300?text=Samsung+Washing+Machine+Image2",
              "https://via.placeholder.com/300?text=Samsung+Washing+Machine+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/samsung-washing-machine-223344/",
          },
          {
            id: 203,
            name: "Bosch Dishwasher",
            description:
              "High efficiency dishwasher with multiple wash programs.",
            rating: 4.2,
            image: "https://via.placeholder.com/150?text=Bosch+Dishwasher",
            images: [
              "https://via.placeholder.com/300?text=Bosch+Dishwasher+Image1",
              "https://via.placeholder.com/300?text=Bosch+Dishwasher+Image2",
              "https://via.placeholder.com/300?text=Bosch+Dishwasher+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/bosch-dishwasher-556677/",
          },
          {
            id: 204,
            name: "Philips Air Purifier",
            description:
              "Keep your home air clean and healthy with advanced filtration.",
            rating: 4.6,
            image: "https://via.placeholder.com/150?text=Philips+Air+Purifier",
            images: [
              "https://via.placeholder.com/300?text=Philips+Air+Purifier+Image1",
              "https://via.placeholder.com/300?text=Philips+Air+Purifier+Image2",
              "https://via.placeholder.com/300?text=Philips+Air+Purifier+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/philips-air-purifier-889900/",
          },
          {
            id: 205,
            name: "Whirlpool Microwave",
            description:
              "Reliable microwave oven for quick and efficient cooking.",
            rating: 4.1,
            image: "https://via.placeholder.com/150?text=Whirlpool+Microwave",
            images: [
              "https://via.placeholder.com/300?text=Whirlpool+Microwave+Image1",
              "https://via.placeholder.com/300?text=Whirlpool+Microwave+Image2",
              "https://via.placeholder.com/300?text=Whirlpool+Microwave+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/whirlpool-microwave-334455/",
          },
        ],
      },
      {
        id: 3,
        name: "Fashion",
        products: [
          {
            id: 301,
            name: "Nike Air Max",
            description: "Iconic sneakers with comfort and style.",
            rating: 4.7,
            image: "https://via.placeholder.com/150?text=Nike+Air+Max",
            images: [
              "https://via.placeholder.com/300?text=Nike+Air+Max+Image1",
              "https://via.placeholder.com/300?text=Nike+Air+Max+Image2",
              "https://via.placeholder.com/300?text=Nike+Air+Max+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/nike-air-max-998877/",
          },
          {
            id: 302,
            name: "Adidas Ultraboost",
            description: "Boost your run with Adidas comfort and performance.",
            rating: 4.8,
            image: "https://via.placeholder.com/150?text=Adidas+Ultraboost",
            images: [
              "https://via.placeholder.com/300?text=Adidas+Ultraboost+Image1",
              "https://via.placeholder.com/300?text=Adidas+Ultraboost+Image2",
              "https://via.placeholder.com/300?text=Adidas+Ultraboost+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/adidas-ultraboost-112244/",
          },
          {
            id: 303,
            name: "Levi’s Jeans",
            description:
              "Classic and comfortable denim jeans for everyday wear.",
            rating: 4.3,
            image: "https://via.placeholder.com/150?text=Levi’s+Jeans",
            images: [
              "https://via.placeholder.com/300?text=Levi’s+Jeans+Image1",
              "https://via.placeholder.com/300?text=Levi’s+Jeans+Image2",
              "https://via.placeholder.com/300?text=Levi’s+Jeans+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/levis-jeans-667788/",
          },
          {
            id: 304,
            name: "Gucci Belt",
            description: "Luxury Gucci belt for a stylish and elegant look.",
            rating: 4.5,
            image: "https://via.placeholder.com/150?text=Gucci+Belt",
            images: [
              "https://via.placeholder.com/300?text=Gucci+Belt+Image1",
              "https://via.placeholder.com/300?text=Gucci+Belt+Image2",
              "https://via.placeholder.com/300?text=Gucci+Belt+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/gucci-belt-556677/",
          },
          {
            id: 305,
            name: "Ray-Ban Sunglasses",
            description: "Stylish sunglasses for a perfect summer look.",
            rating: 4.4,
            image: "https://via.placeholder.com/150?text=Ray-Ban+Sunglasses",
            images: [
              "https://via.placeholder.com/300?text=Ray-Ban+Sunglasses+Image1",
              "https://via.placeholder.com/300?text=Ray-Ban+Sunglasses+Image2",
              "https://via.placeholder.com/300?text=Ray-Ban+Sunglasses+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/ray-ban-sunglasses-334455/",
          },
        ],
      },
      {
        id: 4,
        name: "Sports",
        products: [
          {
            id: 401,
            name: "Adidas Football",
            description: "High quality football for competitive play.",
            rating: 4.6,
            image: "https://via.placeholder.com/150?text=Adidas+Football",
            images: [
              "https://via.placeholder.com/300?text=Adidas+Football+Image1",
              "https://via.placeholder.com/300?text=Adidas+Football+Image2",
              "https://via.placeholder.com/300?text=Adidas+Football+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/adidas-football-112233/",
          },
          {
            id: 402,
            name: "Nike Running Shoes",
            description:
              "Comfortable and durable running shoes for every athlete.",
            rating: 4.8,
            image: "https://via.placeholder.com/150?text=Nike+Running+Shoes",
            images: [
              "https://via.placeholder.com/300?text=Nike+Running+Shoes+Image1",
              "https://via.placeholder.com/300?text=Nike+Running+Shoes+Image2",
              "https://via.placeholder.com/300?text=Nike+Running+Shoes+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/nike-running-shoes-998877/",
          },
          {
            id: 403,
            name: "Wilson Tennis Racket",
            description:
              "Professional tennis racket for superior control and power.",
            rating: 4.5,
            image: "https://via.placeholder.com/150?text=Wilson+Tennis+Racket",
            images: [
              "https://via.placeholder.com/300?text=Wilson+Tennis+Racket+Image1",
              "https://via.placeholder.com/300?text=Wilson+Tennis+Racket+Image2",
              "https://via.placeholder.com/300?text=Wilson+Tennis+Racket+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/wilson-tennis-racket-223344/",
          },
          {
            id: 404,
            name: "Puma Sports Jacket",
            description:
              "Lightweight sports jacket perfect for outdoor activities.",
            rating: 4.3,
            image: "https://via.placeholder.com/150?text=Puma+Sports+Jacket",
            images: [
              "https://via.placeholder.com/300?text=Puma+Sports+Jacket+Image1",
              "https://via.placeholder.com/300?text=Puma+Sports+Jacket+Image2",
              "https://via.placeholder.com/300?text=Puma+Sports+Jacket+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/puma-sports-jacket-334455/",
          },
          {
            id: 405,
            name: "Adidas Basketball",
            description: "Top quality basketball for indoor and outdoor play.",
            rating: 4.4,
            image: "https://via.placeholder.com/150?text=Adidas+Basketball",
            images: [
              "https://via.placeholder.com/300?text=Adidas+Basketball+Image1",
              "https://via.placeholder.com/300?text=Adidas+Basketball+Image2",
              "https://via.placeholder.com/300?text=Adidas+Basketball+Image3",
            ],
            likes: 0,
            link: "https://kaspi.kz/shop/p/adidas-basketball-667788/",
          },
        ],
      },
    ];
  }

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}
