import { defaultProduct, money } from './constants';

export class Product {
  constructor(title, price) {
    this.title = title || defaultProduct;
    this.price = price || 10;
  }

  getPrice() {
    return this.price + money;
  }

  setPrice(value) {
    if (!value) {
      throw new Error('Proce shuld be defined');
    }

    if (value > 10) {
      this.price = value;
    }
  }
}
