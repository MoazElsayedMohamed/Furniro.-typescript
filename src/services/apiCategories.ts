import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { URL } from "../utils/constants";

interface CategoryAttributes {
  name: string;
  image: {
    data: {
      attributes: {
        url: string;
      };
    };
  };
}

interface CategoryData {
  id: number;
  attributes: CategoryAttributes;
}

interface CategoriesResponse {
  data: CategoryData[];
}

const getCategories = async (): Promise<CategoriesResponse> => {
  const response = await fetch(
    `${URL}/api/categories?pagination[page]=1&pagination[pageSize]=10&populate=image`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data: CategoriesResponse = await response.json();
  return data;
};

export function useCategories(): UseQueryResult<CategoriesResponse> {
  return useQuery<CategoriesResponse>({
    queryKey: ["category"],
    queryFn: getCategories,
  });
}
