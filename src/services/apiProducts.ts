import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { URL } from "../utils/constants";

interface ProductAttributes {
  name: string;
  price: number;
  discount: number;
  short_desc: string;
  long_desc: string;
  sku: string;
  size: string;
  content: string;
  color: string;
  count: number;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

interface ProductData {
  id: number;
  attributes: ProductAttributes;
}

interface ProductResponse {
  data: ProductData[];
}

async function getProducts(): Promise<ProductResponse> {
  const response = await fetch(
    `${URL}/api/products?pagination[page]=1&pagination[pageSize]=100&populate[0]=image&sort=name&populate[1]=reviews&populate[2]=tag&populate[3]=category`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const data: ProductResponse = await response.json();
  return data;
}

export function useProducts(): UseQueryResult<ProductResponse> {
  return useQuery<ProductResponse>({
    queryKey: ["product"],
    queryFn: getProducts,
  });
}
