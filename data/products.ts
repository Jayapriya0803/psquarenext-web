export type Category = { id: number; name: string; slug: string };

export type Product = {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
  unit: "pair" | "box" | "kg";
  category: string; // Category slug
  image: { url: string; alternativeText: string };
};

export const categories: Category[] = [
  { id: 2, name: "glove", slug: "glove" },
  { id: 4, name: "cottonwaste", slug: "cottonwaste" },
];

const GREY_GLOVE = "/uploads/glov2_543f1a51bb.jpeg";
const BLUE_GLOVE = "/uploads/Blue_Knitted_Hand_Gloves_300x300_0f374384d5.png";

// IDs match the published Strapi entries so existing carts/orders stay valid.
export const products: Product[] = [
  { id: 2, title: "glove", slug: "glove", description: "cotton knitted hand gloves grey 70gsm", price: 8.5, stock: 2000, unit: "pair", category: "glove", image: { url: GREY_GLOVE, alternativeText: "Grey cotton knitted gloves" } },
  { id: 4, title: "glove", slug: "glove-1", description: "cotton knitted hand gloves grey 60gsm", price: 7.5, stock: 2000, unit: "pair", category: "glove", image: { url: GREY_GLOVE, alternativeText: "Grey cotton knitted gloves" } },
  { id: 7, title: "glove", slug: "glove-2", description: "cotton knitted hand gloves grey 50gsm", price: 6.5, stock: 2000, unit: "pair", category: "glove", image: { url: GREY_GLOVE, alternativeText: "Grey cotton knitted gloves" } },
  { id: 9, title: "glove", slug: "glove-3", description: "cotton knitted hand gloves grey 40gsm", price: 5.5, stock: 2000, unit: "pair", category: "glove", image: { url: GREY_GLOVE, alternativeText: "Grey cotton knitted gloves" } },
  { id: 11, title: "glove", slug: "glove-4", description: "cotton knitted hang gloves grey 80gsm", price: 9.5, stock: 2000, unit: "pair", category: "glove", image: { url: GREY_GLOVE, alternativeText: "Grey cotton knitted gloves" } },
  { id: 13, title: "glove", slug: "glove-5", description: "cotton knitted hand glove navy blue 40gsm", price: 6.5, stock: 2000, unit: "pair", category: "glove", image: { url: BLUE_GLOVE, alternativeText: "Navy blue cotton knitted gloves" } },
  { id: 15, title: "glove", slug: "glove-6", description: "cotton knitted hand gloves navy blue 50gsm", price: 7.5, stock: 2000, unit: "pair", category: "glove", image: { url: BLUE_GLOVE, alternativeText: "Navy blue cotton knitted gloves" } },
  { id: 17, title: "glov", slug: "glov", description: "cotton knitted hand glove navy blue 60gsm", price: 8.5, stock: 2000, unit: "pair", category: "glove", image: { url: BLUE_GLOVE, alternativeText: "Navy blue cotton knitted gloves" } },
  { id: 19, title: "glove", slug: "glove-7", description: "cotton knitted hand gloves navy blue 70gsm", price: 9.5, stock: 2000, unit: "pair", category: "glove", image: { url: BLUE_GLOVE, alternativeText: "Navy blue cotton knitted gloves" } },
  { id: 21, title: "glove", slug: "glove-8", description: "cotton knitted hand gloves navy blue 80gsm", price: 10.5, stock: 2000, unit: "pair", category: "glove", image: { url: BLUE_GLOVE, alternativeText: "Navy blue cotton knitted gloves" } },
  { id: 23, title: "dotted glove", slug: "dotted-glove", description: "Blue Dotted Cotton gloves 50 gsm, 9 inches", price: 18, stock: 1000, unit: "pair", category: "glove", image: { url: "/uploads/dottedglov_d5837cac30.jfif", alternativeText: "Blue dotted cotton gloves" } },
  { id: 25, title: "latex gloves", slug: "latex-gloves", description: "Latex gloves box of 100 pieces", price: 400, stock: 5, unit: "box", category: "glove", image: { url: "/uploads/latexglov_e1f125bbd4.jfif", alternativeText: "Latex gloves" } },
  { id: 27, title: "leather gloves", slug: "leather-gloves", description: "leather gloves for welding", price: 200, stock: 200, unit: "pair", category: "glove", image: { url: "/uploads/leatherglov_24b929a9d0.jfif", alternativeText: "Leather welding gloves" } },
  { id: 29, title: "nitrile gloves", slug: "nitrile-gloves", description: "Nitrile coated gloves", price: 35, stock: 500, unit: "pair", category: "glove", image: { url: "/uploads/nitrileglov_5c4fcff945.jfif", alternativeText: "Nitrile coated gloves" } },
  { id: 31, title: "rubber gloves", slug: "rubber-gloves", description: "Generic rubber hand gloves 12 inch", price: 110, stock: 200, unit: "pair", category: "glove", image: { url: "/uploads/rubberglov_9608e2be7a.jfif", alternativeText: "Rubber hand gloves" } },
  { id: 33, title: "whitecloth", slug: "whitecloth", description: "Baniyan cloth waste white color", price: 105, stock: 50, unit: "kg", category: "cottonwaste", image: { url: "/uploads/whitewaste_407086800f.jfif", alternativeText: "White baniyan cloth waste" } },
  { id: 35, title: "cotton waste", slug: "cotton-waste", description: "Cotton baniyan cloth waste color", price: 55, stock: 100, unit: "kg", category: "cottonwaste", image: { url: "/uploads/cottonwaste_9d946ef9d4.jfif", alternativeText: "Coloured cotton cloth waste" } },
];
