import data from "../data.json";
function Sizes() {
  // Filter all Sizes
  let allSizes = [];
  data.products.forEach((item) => {
    item.availableSizes.forEach((size) => {
      if (!allSizes.includes(size)) {
        allSizes.push(size);
      }
    });
  });
  return (
    <div>
      <h4 className="mb-5 font-semibold">Sizes:</h4>
      <div className="w-[15%]  grid grid-cols-4 gap-2 text-xs font-light">
        {allSizes.map((size) => {
          return (
            <button className="h-[35px] w-[35px] p-1 rounded-full bg-neutral-200">
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Sizes;
