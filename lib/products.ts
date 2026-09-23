export type Product = { id: string; name: string; price: number; hue: number };

export const products: Product[] = [
  { id: "mug", name: "Stoneware Mug", price: 24, hue: 24 },
  { id: "kettle", name: "Gooseneck Pour-Over Kettle with Built-In Thermometer", price: 89, hue: 200 },
  { id: "beans", name: "Ethiopia Yirgacheffe, 340 g", price: 19.5, hue: 35 },
  { id: "grinder", name: "Hand Grinder", price: 145, hue: 260 },
  { id: "filters", name: "Paper Filters ×100", price: 7, hue: 90 },
  { id: "scale", name: "Brewing Scale", price: 59, hue: 160 },
];
