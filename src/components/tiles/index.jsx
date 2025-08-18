import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

const ProductTile = ({ singleProductTile }) => {
  const navigate = useNavigate();
  const { handleAddtoCart, cartItems } = useContext(ShoppingCartContext);

  const handleSubmit = (id) => {
    navigate(`/product-details/${id}`);
  };

  const isInCart = cartItems.findIndex((item) => item?.id === singleProductTile?.id) > -1;

  return (
    <div className="relative group border border-gray-200 rounded-2xl p-5 bg-white shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
      <div className="overflow-hidden aspect-w-1 aspect-h-2 rounded-lg">
        <img
          src={singleProductTile.thumbnail}
          alt={singleProductTile.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105 rounded-lg"
          onClick={() => handleSubmit(singleProductTile.id)}
        />
      </div>
      <div className="flex items-center justify-between mt-4 space-x-4">
        <p className="font-semibold text-gray-900 truncate max-w-[100px] text-sm md:text-base">
          {singleProductTile?.title}
        </p>
        <p className="text-indigo-600 font-bold text-base">${singleProductTile?.price}</p>
      </div>

      <button
        onClick={() => handleSubmit(singleProductTile.id)}
        className="mt-4 w-full rounded-lg px-4 py-2 font-semibold text-white 
          bg-gradient-to-r from-indigo-600 to-purple-700 
          hover:from-indigo-700 hover:to-purple-800 
          shadow-md hover:shadow-lg 
          transition duration-300 transform hover:scale-105"
      >
        View Details
      </button>

      <button
        disabled={isInCart}
        onClick={() => handleAddtoCart(singleProductTile)}
        className={`mt-2 w-full rounded-lg px-4 py-2 font-semibold text-white transition duration-300 transform ${
          isInCart
            ? "bg-gray-300 text-gray-600 cursor-not-allowed shadow-none"
            : "bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 shadow-md hover:shadow-lg hover:scale-105"
        }`}
      >
        {isInCart ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductTile;
