import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import ProductElements from "./ProductElements";

const Products = () => {
  return (
    <section className="text-center mb-12">
      <h2 className="text-5xl capitalize mt-32 mb-12 font-bold">
        our products
      </h2>
      <ProductElements PAGE_SIZE={8} />
      <Link
        className={buttonVariants({
          variant: "outline",
          size: "xl",
        })}
        to="/shop"
      >
        Show more
      </Link>
    </section>
  );
};

export default Products;
