function Products(props) {
  return (
    <div className="basis-[80%] grid grid-cols-4 gap-8">
      {props.products.map((product, index) => {
        return (
          <div className="hover:shadow-md cursor-pointer group" key={index}>
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
              <p className="mb-2">
                $<span className="font-bold text-lg">{product.price}</span>
              </p>
              <button className="bg-gray-800 text-slate-200 w-full font-light py-4 group-hover:bg-yellow-500">
                Add To Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Products;
