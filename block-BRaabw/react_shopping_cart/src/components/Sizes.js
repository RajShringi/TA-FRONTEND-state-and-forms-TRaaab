function Sizes(props) {
  return (
    <div className="basis-[15%]">
      <h4 className="mb-5 font-semibold">Sizes:</h4>
      <div className="grid grid-cols-4 gap-2 text-xs font-light">
        {props.allSizes.map((size) => {
          return (
            <button
              onClick={() => props.handleFilter(size)}
              key={size}
              className={`h-[35px] w-[35px] p-1 rounded-full  ${
                props.filter.includes(size)
                  ? "bg-gray-800 text-white"
                  : "bg-neutral-200"
              }`}
            >
              {size}
            </button>
          );
        })}
      </div>
    </div>
  );
}
export default Sizes;
