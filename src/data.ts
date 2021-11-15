import faker from "faker";

interface FakeData {
  name: string;
  id: string;
  price: string;
  image: string;
}

class DataService {
  public products: FakeData[];

  constructor() {
    this.generate();
  }

  generate() {
    this.products = Array.from({ length: 100 }).map(() => ({
      name: faker.commerce.productName(),
      id: faker.datatype.uuid(),
      price: `$${faker.commerce.price()}`,
      image: faker.image.imageUrl(),
    }));
  }
}

export default new DataService();
