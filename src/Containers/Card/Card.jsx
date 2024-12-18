import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import { useStore } from "../../store/store";
import { RiShoppingCart2Fill, RiShoppingCart2Line } from "react-icons/ri";

const Card = ({ product }) => {
  const { images, title, rating, fullPrice, sellPrice, productId } = product;

  const {
    favorite,
    addToFavorite,
    removeFromFavorite,
    cart,
    addToCart,
    removeFromCart,
  } = useStore();

  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(
    favorite.find((id) => id === productId) ? true : false
  );
  const [isCart, setIsCart] = useState(
    cart?.find((id) => id === productId) ? true : false
  );

  function hanleClick() {
    navigate(`/product/${productId}`);
  }

  function handleFavorite() {
    if (favorite.find((id) => id === productId)) {
      removeFromFavorite(productId);
    } else {
      addToFavorite(productId);
    }
    setIsFavorite(!isFavorite);
  }

  function handleCart() {
    if (cart?.find((id) => id === productId)) {
      removeFromCart(productId);
    } else {
      addToCart(productId); // Ensure addToCart is correctly passed and defined
    }
    setIsCart(!isCart);
  }

  return (
    <div className="shadow-lg bg-slate-50 w-60 cursor-pointer">
      <div className="relative">
        <img
          src={images[0]}
          alt=""
          className="w-60 rounded-md"
          onClick={hanleClick}
        />
        {isFavorite ? (
          <FaHeart
            className="absolute top-4 right-4 animate-yurak"
            style={{ animationIterationCount: "1" }}
            size={20}
            color="#7f4dff"
            onClick={handleFavorite}
          />
        ) : (
          <FaRegHeart
            className="absolute top-4 right-4"
            size={20}
            onClick={handleFavorite}
          />
        )}
      </div>
      <p className="font-bold text-[16px]" onClick={hanleClick}>
        {title}
      </p>
      {rating === 0 ? (
        <p>Product not rated yet...</p>
      ) : (
        <Rating
          readonly
          initialValue={rating}
          SVGstyle={{ display: "inline-block" }}
          allowFraction
          size={25}
          transition
        />
      )}
      <p className="text-xs pt-5 text-slate-500 line-through">{fullPrice}</p>
      <div className="flex justify-between p-2">
        <p>{sellPrice} so'm</p>
        {isCart ? (
          <RiShoppingCart2Fill
            className="animate-korzina"
            size={20}
            style={{ animationIterationCount: "1" }}
            onClick={handleCart}
          />
        ) : (
          <RiShoppingCart2Line
            className="animate-korzina"
            size={20}
            style={{ animationIterationCount: "1" }}
            onClick={handleCart}
          />
        )}
      </div>
    </div>
  );
};

export default Card;
