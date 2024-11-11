// import React from "react";
import Category from "./Category";
import { useCategories } from "../../services/apiCategories";
import { URL } from "../../utils/constants";
import React from "react";

const Categories: React.FC = () => {
  const { data: categories, error, isLoading } = useCategories();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading categories</p>;

  const categoriesElements = categories?.data.map((category) => {
    return (
      <Category
        key={category.id}
        name={category.attributes.name}
        imageUrl={`${URL}${category.attributes.image.data.attributes.url}`}
      />
    );
  });

  return (
    <section className="mt-14 mb-28 text-center px-8">
      <h3 className="text-5xl uppercase font-bold mb-8">browse the range</h3>
      <p className="text-2xl mb-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Exercitationem, ad incidunt nihil
      </p>
      <div className=" grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-8">
        {categoriesElements}
      </div>
    </section>
  );
};

export default Categories;
