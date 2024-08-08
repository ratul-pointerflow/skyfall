// Type for priceV2 used in priceRange
export interface PriceV2 {
  amount: string;
  currencyCode: string;
}

// Type for the priceRange field
export interface PriceRange {
  minVariantPrice: PriceV2;
  maxVariantPrice: PriceV2;
}

// Type for product images
export interface ProductImage {
  id: string | null;
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

// Type for a single product
export interface Product {
  id: string;
  title: string;
  handle: string;
  tags: string[];
  priceRange: PriceRange;
  images: any;
}

// Type for the response structure
export interface ProductsResponse {
  data: {
    products: {
      edges: {
        node: Product;
      }[];
    };
  };
}
