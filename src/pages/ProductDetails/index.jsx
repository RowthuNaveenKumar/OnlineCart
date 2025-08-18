import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShoppingCartContext } from "../../context";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const {
    productDetails,
    setProductDetails,
    loading,
    setLoading,
    handleAddtoCart,
    cartItems,
  } = useContext(ShoppingCartContext);

  async function fetchSingleProductDetails() {
    const apiResponse = await fetch(`https://dummyjson.com/products/${id}`);
    const result = await apiResponse.json();
    if (result) {
      setProductDetails(result);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSingleProductDetails();
  }, [id]);

  if (loading)
    return (
      <h1 className="text-center text-lg font-semibold text-indigo-600">
        Product details loading, please wait...
      </h1>
    );

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-10">
      <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
        <div className="grid items-center grid-cols-1 lg:grid-cols-5 gap-10 bg-white shadow-xl rounded-2xl p-6">
          {/* Product Image */}
          <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
            <div className="px-4 py-10 rounded-3xl bg-gray-100 shadow-md">
              <img
                className="w-4/5 rounded-lg object-cover transition-transform duration-300 hover:scale-105"
                src={productDetails?.thumbnail}
                alt={productDetails?.title}
              />
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {productDetails?.images?.length
                ? productDetails?.images.map((imageItem) => (
                    <div
                      className="rounded-xl p-2 bg-white border border-gray-200 shadow-sm hover:shadow-md transition duration-200"
                      key={imageItem}
                    >
                      <img
                        src={imageItem}
                        className="w-20 h-20 object-cover rounded cursor-pointer hover:scale-105 transition duration-300"
                        alt="product secondary"
                      />
                    </div>
                  ))
                : null}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-extrabold text-gray-800">
              {productDetails?.title}
            </h2>
            <p className="text-gray-500 mt-2 text-sm">
              {productDetails?.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-6 items-center">
              <p className="text-2xl font-bold text-indigo-600">
                ${productDetails?.price}
              </p>
              <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
                {productDetails?.brand}
              </span>
            </div>

            <div>
              <button
                disabled={
                  productDetails
                    ? cartItems.findIndex(
                        (item) => item.id === productDetails?.id
                      ) > -1
                    : false
                }
                onClick={() => handleAddtoCart(productDetails)}
                className="disabled:opacity-65 mt-8 min-w-[200px] px-5 py-3 rounded-lg text-white font-semibold shadow-md transition duration-300 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
