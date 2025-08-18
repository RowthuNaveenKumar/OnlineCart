import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { useNavigate } from "react-router-dom";
import CartTile from "../../components/cartTile";

const CartListPage = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-gray-900 text-center">
        My Shopping Cart
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {/* Cart Items Section */}
        <div className="lg:col-span-2 space-y-6">
          {cartItems?.length ? (
            cartItems.map((singleCartItem, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
              >
                <CartTile singleCartItem={singleCartItem} />
              </div>
            ))
          ) : (
            <div className="bg-gray-50 p-10 rounded-lg text-center border border-dashed border-gray-300">
              <h2 className="text-lg font-medium text-gray-700">
                Your cart is empty 🛒
              </h2>
              <p className="text-sm text-gray-500 mt-2">
                Start adding products to see them here.
              </p>
              <button
                onClick={() => navigate("/")}
                className="mt-4 px-5 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
              >
                Browse Products
              </button>
            </div>
          )}
        </div>

        {/* Order Summary Section */}
        <div className="bg-white rounded-lg shadow p-6 h-max border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 border-b border-gray-200 pb-3">
            Order Summary
          </h3>
          <ul className="mt-4 text-gray-700 space-y-3">
            <li className="flex justify-between font-medium">
              <span>Total</span>
              <span className="text-indigo-600 font-bold">
                $
                {cartItems
                  .reduce((acc, curr) => acc + curr.totalPrice, 0)
                  .toFixed(2)}
              </span>
            </li>
          </ul>

          <div className="mt-6 flex gap-3">
            <button
              disabled={cartItems.length === 0}
              className="w-full disabled:opacity-50 bg-green-600 text-white font-medium py-2 rounded-lg hover:bg-green-700 transition"
            >
              Checkout
            </button>
            <button
              onClick={() => navigate("/")}
              className="w-full bg-gray-100 text-gray-800 font-medium py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartListPage;
