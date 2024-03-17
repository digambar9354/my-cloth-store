export interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  quantity: number;
  reorderPoint: number;
  purchasePrice: number;
  sellingPrice: number;
}

export interface Stock {
    id: number;
    productId: number;
    quantity: number;
    purchaseDate: Date;
    purchasePrice: number;
}