import { Component, Input } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

interface Product {
  name: string;
  description: string;
  image: string;
  rating: number;
  link: string;
  category: string;
  price: number;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, NgFor, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() category: string = 'All';

  products: Product[] = [
    {
      name: 'Apple 18W USB-C Power Adapter USB Type-C белый',
      description:
        'Адаптер Apple 18W USB-C Power Adapter представляет собой компактное и эффективное зарядное устройство, предназначенное для быстрой и эффективной зарядки ваших устройств.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=gallery-medium',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
      category: 'Electronics',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Apple iPhone 13 128Gb черный',
      description:
        'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      category: 'Electronics',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Xiaomi Redmi Watch 5 Active 51 мм черный-черный',
      description:
        'Redmi Watch 5 Active с большим дисплеем помогут вести активны образ жизни, контролировать ваше здоровье и повысить эффективность при решении повседневных задач.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hec/h25/87197780049950.jpg?format=gallery-medium',
      rating: 4.5,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-watch-5-active-51-mm-chernyi-chernyi-123879372/?c=750000000',
      category: 'Electronics',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Пижама красный',
      description:
        'Комплект одежды для и сна. Очень приятная ткань, красивый принт. На подарок самое то. Побалуйте себя прекрасным.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h31/h6e/86221471449118.jpg?format=gallery-medium',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/pizhama-18007506-229546481-krasnyi-m-120169884/?c=750000000&hasVariants=true',
      category: 'Clothing',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Боксеры Nanjiren мультиколор',
      description:
        'Мужские трусы боксеры, комплект из 4 штук, фирменный логотип, однотонные цвета, отличного качества, Антибактериальное волокно, Состав: хлопковое волокно. Подкладка - хлопковое волокно. . Это ткань высокого качества, она сохраняет форму и очень прочная.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h4f/h4f/86139104624670.jpg?format=gallery-medium',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/boksery-nanjiren-komplekt-mul-tikolor-xl-110433923/?c=750000000&hasVariants=true',
      category: 'Clothing',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Футболка Skims черный',
      description:
        'Шикарная футболка под бренд «SKIMS» подчеркнет вашу красивую фигиру. Размерная сетка s/xs',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/p05/pae/7860712.jpeg?format=gallery-medium',
      rating: 4.2,
      link: 'https://kaspi.kz/shop/p/futbolka-skims-031124-15-chernyi-40-129909523/?c=750000000&hasVariants=true',
      category: 'Clothing',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Клир Д.: Атомные привычки',
      description:
        'Лучшая деловая книга 2018 года по версии Fast Company.Лучшая книга по самопомощи 2018 года по версии Business Insider.Может ли одна монетка сделать человека богатым? Конечно нет, скажете вы.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000',
      category: 'Books',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Книга Дамира Өмірзаққызы Ибрагим: Адамзаттың асыл тәжі',
      description:
        'Книга Дамира Өмірзаққызы Ибрагим "Адамзаттың асыл тәжі" посвящена жизни и деятельности Пророка Мухаммеда (мир ему и благословение) и его великому вкладу в развитие человечества.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/ha2/h5f/86166055419934.jpg?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/damira-m-rza-yzy-ibragim-adamzatty-asyl-t-zh--119954682/?c=750000000',
      category: 'Books',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Книга Керімбай С., Нәби Ә.: Қаныш және Ғылыми майдан',
      description:
        'Керімбай С., Нәби Ә.: Қаныш және Ғылыми майдан — бұл кітап ұлы ғалым Қаныш Сәтбаевтың өмірі мен ғылыми қызметіне арналады. Авторлар Қаныш Сәтбаевтың Қазақстан ғылымына қосқан үлесін, оның ғылым майданындағы күресі.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h63/h8a/87162104250398.png?format=gallery-medium',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/ker-mbai-s-n-bi-anysh-zh-ne-ylymi-maidan-123730850/?c=750000000',
      category: 'Books',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Morbido диван прямой Комфорт, обивка микровелюр, 80х210х80 см, серый',
      description:
        'Практичный  диван-кровать с легкой системой трансформации. Каркас изготовлен из ДСП, деревянный брус. Мягкие элементы выполнены из пенополиуретана. Диван оснащен механизмом трансформации еврокнижка ',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h9b/h48/86777038274590.png?format=gallery-medium',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=750000000',
      category: 'Furniture',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Вешалка напольная, izox, металл, 110x150 см, черный',
      description:
        'Одним из основных преимуществ данной вешалки является её вместительность. Она оснащена несколькими перекладинами для размещения различных видов одежды, включая пиджаки, рубашки, платья и даже верхнюю одежду.',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=750000000',
      category: 'Furniture',
      price: 9990,
      likes: 0,
    },
    {
      name: 'Стул Чили, 86x45x37 см, обивка серый велюр',
      description: 'Очень хороший ступ покупай)))',
      image:
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h3b/85982139088926.jpg?format=gallery-medium',
      rating: 4.3,
      link: 'https://kaspi.kz/shop/p/stul-chili-86x45x37-sm-obivka-seryi-veljur-109319431/?c=750000000',
      category: 'Furniture',
      price: 9990,
      likes: 0,
    },
  ];

  get filteredProducts() {
    return this.category === 'All'
      ? this.products
      : this.products.filter((p) => p.category === this.category);
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }
}
