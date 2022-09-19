function Products(props) {
  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <p>{props.products.length} Product(s) found</p>
        <select
          onChange={props.handleChange}
          className="outline-none border p-1 rounded-md"
        >
          <option value="">Select Order</option>
          <option value="Lowest to highest">Lowest to highest</option>
          <option value="Highest to lowest">Highest to lowest</option>
        </select>
      </div>
      <div className="basis-[80%] grid grid-cols-4 gap-8">
        {props.products.map((product, index) => {
          return (
            <div
              className="hover:shadow-md cursor-pointer group relative"
              key={index}
            >
              <div className="mb-1">
                <img
                  className="h-[250px] w-full object-cover object-top"
                  src={`/static/products/${product.sku}_1.jpg`}
                  alt={product.title}
                />
              </div>
              <div className="text-center bg-white">
                <h2>{product.title}</h2>
                <span className="inline-block w-[40px] h-[2px] bg-yellow-300 my-4"></span>
                <p className="mb-6 leading-3">
                  $<span className="font-bold text-2xl">{product.price}</span>{" "}
                  <br />
                  <span className="text-gray-400">
                    or {product.installments} x $
                    {(product.price / product.installments).toFixed(2)}
                  </span>
                </p>
                <button className="bg-gray-800 text-slate-200 w-full font-light py-4 transition-all group-hover:bg-yellow-500">
                  Add To Cart
                </button>
              </div>
              <div className="absolute top-0 right-0">
                {product.isFreeShipping && (
                  <span className="inline-block text-[.6rem] bg-gray-800 text-gray-200 p-1">
                    Free Shipping
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Products;
