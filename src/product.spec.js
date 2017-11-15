import sinon from 'sinon';
import chai from 'chai'; 
const { expect } = chai;

import { Product } from './Product';
import { defaultProduct, money } from './constants';

describe('Product', () => {
	let product;
	beforeEach(() => product = new Product());

	it('should create instance with title and price', () => {
    const titleTest = 'test';
    const priceTest = 20;
    const product = new Product(titleTest, priceTest);

    expect(product.title).to.equal(titleTest);
    expect(product.price).to.equal(priceTest);
  });

  it('should create instance with default title and price', () => {
    expect(product).to.have.own.property('title');
    expect(product.title).to.exist;
    expect(product.title).to.equal(defaultProduct);

    expect(product).to.have.own.property('price');
    expect(product.price).to.exist;
    expect(product.price).to.equal(10);
  });

  it('should create instance with title and default price', () => {
    const titleTest = 'test';
    const product = new Product(titleTest, null);

    expect(product.title).to.equal(titleTest);

    expect(product).to.have.own.property('price');
    expect(product.price).to.exist;
    expect(product.price).to.equal(10);
  });

  it('should create instance with price and default title', () => {
    const priceTest = 20;
    const product = new Product(null, priceTest);

    expect(product.price).to.equal(priceTest);

    expect(product).to.have.own.property('title');
    expect(product.title).to.exist;
    expect(product.title).to.equal(defaultProduct);
  });

	it('should get price', () => {
		expect(product.getPrice()).to.be.equal(product.price + money);
	});

	it('should set price when argument > 10', () => {
		const priceTest = 20;
		product.setPrice(priceTest);
		expect(product.price).to.be.equal(priceTest);
	});

	it('should not set price when argument <= 10', () =>{
		const priceTest = 5;
		product.setPrice(priceTest);
    expect(product.price).to.be.equal(10); 
  });
});
