import Product from "./Product";
import { Skeleton } from "../ui/skeleton";
import { useProducts } from "../../services/apiProducts";
import { URL } from "../../utils/constants";
import { Link } from "react-router-dom";
import React from "react";

interface Size {
  PAGE_SIZE: number;
}

const ProductElements: React.FC<Size> = ({ PAGE_SIZE }) => {
  const { data: products, error, isLoading } = useProducts();
  const currentPage = 1;

  if (isLoading)
    return <Skeleton className="w-[100px] h-[20px] rounded-full" />;

  if (error) return <p>Error loading Products</p>;

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const productsToDisplay = products?.data.slice(startIndex, endIndex);

  const productsElements = productsToDisplay?.map((product) => {
    return (
      <Link to={`/product/${product.id}`}>
        <Product
          key={product.id}
          name={product.attributes.name}
          price={product.attributes.price}
          discount={product.attributes.discount}
          shortDesc={product.attributes.short_desc}
          imageUrl={`${URL}${product.attributes.image.data.attributes.url}`}
        />
      </Link>
    );
  });

  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))] px-8 gap-4 mb-16">
      {productsElements}
    </div>
  );
};

export default ProductElements;
