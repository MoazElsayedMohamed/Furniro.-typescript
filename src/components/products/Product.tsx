import React, { useState } from "react";
import { CiHeart, CiShare1 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";

interface ProductProps {
  imageUrl: string;
  name: string;
  price: number;
  discount: number;
  shortDesc: string;
}

const Product: React.FC<ProductProps> = ({
  imageUrl,
  name,
  price,
  discount,
  shortDesc,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseOver() {
    setIsHovering(true);
  }

  function handleMouseOut() {
    setIsHovering(false);
  }

  return (
    <div
      className=" relative cursor-pointer"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHovering && (
        <div className="hovering-card">
          <button className="bg-white text-primary py-4 px-6 text-3xl font-bold border-none absolute left-1/4 top-1/3 uppercase">
            add to cart
          </button>
          <div className="flex items-center gap-4 text-white absolute top-1/2 text-2xl pl-12">
            <CiShare1 />
            <p className="capitalize">share</p>
            <MdOutlineCompareArrows />
            <p className="capitalize">compare</p>
            <CiHeart />
            <p className="capitalize">like</p>
          </div>
        </div>
      )}

      <img src={imageUrl} alt={name} className="w-full h-9/12" />
      <p
        className={
          discount
            ? "absolute top-4 right-2 bg-red-300 rounded-full text-white py-8 px-4  text-2xl"
            : " absolute top-4 right-2  rounded-full text-white py-7 px-4 text-2xl bg-green-300"
        }
      >
        {discount ? `-${discount}%` : "New"}
      </p>
      <div className="text-left flex flex-col gap-4 relative bg-gray-50 px-8 py-8">
        <h4 className="text-3xl font-bold">{name}</h4>
        <p className="text-2xl text-gray-400">{shortDesc}</p>
        <p className="text-3xl font-bold">Rp {price}.000</p>
      </div>
    </div>
  );
};

export default Product;
