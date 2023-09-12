const products = [
  {
    id: 1,
    name: "Botas 1",
    price: "1000",
    description: "lorem ipsum dolor",
    stock: "1",
    img: "/public/img/botas.png",
    category: "botas",
  },
  {
    id: 2,
    name: "Botas 2",
    price: "1000",
    description: "lorem ipsum dolor",
    stock: "20",
    img: "/public/img/botas.png",
    category: "botas",
  },
  {
    id: 3,
    name: "Botas 3",
    price: "1000",
    description: "lorem ipsum dolor",
    stock: "2",
    img: "/public/img/botas.png",
    category: "botas",
  },
  {
    id: 4,
    name: "Camisa 4",
    price: "1000",
    description: "lorem ipsum dolor",
    stock: "3",
    img: "/public/img/camisa.jpg",
    category: "camisas",
  },
  {
    id: 5,
    name: "Camisa 5",
    price: "1000",
    description: "lorem ipsum dolor",
    stock: "5",
    img: "/public/img/camisa.jpg",
    category: "camisas",
  },
  {
    id: 6,
    name: "Camisa 6",
    price: "1000",
    description: "lorem ipsum dolor",
    stock: "10",
    img: "/public/img/camisa.jpg",
    category: "camisas",
  },
];

export const mFetch = (pid) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(pid ? products.find((product) => product.id === pid) : products);
    });
  });
