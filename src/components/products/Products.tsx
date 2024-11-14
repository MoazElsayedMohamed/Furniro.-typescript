import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import ProductElements from "./ProductElements";

const Products = () => {
  return (
    <section className="text-center mb-12">
      <h2 className="text-3xl capitalize  mb-12 font-bold text-[#3A3A3A]">
        our products
      </h2>
      <ProductElements PAGE_SIZE={8} />
      <Link
        className={buttonVariants({
          variant: "outline",
        })}
        to="/shop"
      >
        Show more
      </Link>
    </section>
  );
};

export default Products;
