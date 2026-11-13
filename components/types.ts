export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  modelCode: string;
  category: string;
  price: number;
  formattedPrice: string;
  images: string[];
  colors: ProductColor[];
  description: string;
  dimensions: string;
  material: string;
}

export interface CartItem {
  product: Product;
  selectedColor: ProductColor;
  quantity: number;
}
