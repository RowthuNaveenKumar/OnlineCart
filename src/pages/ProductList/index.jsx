import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import ProductTile from "../../components/tiles";

const ProductListPage = () => {
  const { loading, ListofProducts } = useContext(ShoppingCartContext);

  if (loading)
    return (
      <h2 className="text-center text-lg font-semibold text-indigo-600 mt-20">
        Loading products, please wait...
      </h2>
    );

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-800">Our Featured Products</h2>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-10 lg:grid-cols-4 lg:gap-8">
          {ListofProducts && ListofProducts.length > 0 ? (
            ListofProducts.map((singleProductTile) => (
              <ProductTile key={singleProductTile.id} singleProductTile={singleProductTile} />
            ))
          ) : (
            <h3 className="text-center text-lg text-gray-500 mt-20">No products found.</h3>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductListPage;
