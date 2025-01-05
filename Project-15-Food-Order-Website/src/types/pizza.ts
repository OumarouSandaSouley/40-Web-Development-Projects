export interface Pizza {
  $id: string;
  name: string;
  description: string;
  image: string;
  prices: number[];
  ingredients: string[];
}

export interface CartItem extends Pizza {
  size: "small" | "medium" | "large";
  quantity: number;
}
