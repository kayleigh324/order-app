export interface Product {
  key: string;
  src: string;
  title: string;
  price: number;
}

const productData: Product[] = [ 
  {
    "key": "item1",
    "src": "imgs/dre-beats1.png",
    "title": "Beats by Dre Studio 3 Wireless Over the ear headphones - black & red",
    "price": 345.99
  },
  {
    "key": "item4",
    "src": "imgs/dre-beats4.png",
    "title": "Beats by Dre Studio 3 Wireless Over the ear headphones - rose gold",
    "price": 199.95
  },
  {
    "key": "item5",
    "src": "imgs/dre-beats5.png",
    "title": "Beats by Dre Studio 3 Wireless Over the ear headphones - black",
    "price": 499.95
  },
  {
    "key": "item3",
    "src": "imgs/dre-beats3.png",
    "title": "Beats by Dre Studio 3 Wireless Over the ear headphones - white",
    "price": 299.99
  },
  {
    "key": "item2",
    "src": "imgs/dre-beats2.png",
    "title": "Beats by Dre Studio 3 Wireless Over the ear headphones - grey",
    "price": 389.99
  }
]

export default productData;