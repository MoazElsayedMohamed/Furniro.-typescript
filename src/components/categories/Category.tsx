import React from "react";

interface Data {
  name: string;
  imageUrl: string;
}

const Category: React.FC<Data> = ({ imageUrl, name }) => {
  return (
    <div className="mb-12">
      <img src={imageUrl} alt={name} className="w-full h-full" />
      <h3 className="text-2xl font-semibold text-[#333333] mt-8 mb-24">
        {name}
      </h3>
    </div>
  );
};

export default Category;
