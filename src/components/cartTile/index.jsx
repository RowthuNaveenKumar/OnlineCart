import { useContext } from "react";
import { ShoppingCartContext } from "../../context";

const CartTile = ({ singleCartItem }) => {
  const { handleRemoveFromCart, handleAddtoCart } =
    useContext(ShoppingCartContext);

  return (
    <div className="grid grid-cols-3 items-start gap-6 p-5 rounded-lg bg-white shadow hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="col-span-2 flex items-start gap-5">
        <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 bg-gray-50 p-2 rounded-lg border border-gray-200 overflow-hidden">
          <img
            src={singleCartItem?.thumbnail}
            alt={singleCartItem?.title}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between gap-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {singleCartItem?.title}
          </h3>
          <p className="text-sm text-gray-500">
            Brand: {singleCartItem?.brand || "Unknown"}
          </p>
          <button
            onClick={() => handleRemoveFromCart(singleCartItem, true)}
            className="self-start text-sm px-3 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded-md transition-all duration-200 active:scale-95"
          >
            Remove
          </button>
        </div>
      </div>

      {/* Price & Quantity */}
      <div className="ml-auto flex flex-col items-end justify-between">
        <h3 className="text-lg sm:text-xl font-bold text-indigo-600">
          ${singleCartItem?.totalPrice.toFixed(2)}
        </h3>

        {/* Quantity Controls */}
        <div className="mt-3 flex items-center gap-3">
          <button
            onClick={() => handleRemoveFromCart(singleCartItem, false)}
            className="w-8 h-8 flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold disabled:opacity-50 transition-all duration-200 active:scale-95"
            disabled={singleCartItem?.quantity === 1}
          >
            -
          </button>
          <span className="w-6 text-center font-medium">
            {singleCartItem?.quantity || 1}
          </span>
          <button
            onClick={() => handleAddtoCart(singleCartItem)}
            className="w-8 h-8 flex items-center justify-center rounded-md bg-green-600 hover:bg-green-700 text-white font-bold transition-all duration-200 active:scale-95"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartTile;
