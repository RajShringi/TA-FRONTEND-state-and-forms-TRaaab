function Item(props) {
  return (
    <div className="flex justify-between items-center flex-wrap">
      {props.items.map((item) => {
        return (
          <div
            key={item.title}
            className="flex justify-between items-center basis-[45%] p-3 mb-4"
          >
            <div className="basis-[45%] border-4 border-yellow-600 rounded-md overflow-hidden">
              <img
                className="w-full h-[150px] object-cover"
                src={item.img}
                alt={item.title}
              />
            </div>
            <article className="basis-[45%] text-left">
              <div className="flex justify-between items-center mb-3 border-dashed border-b border-gray-500">
                <h3 className="text-lg capitalize">{item.title}</h3>
                <p className="text-yellow-600 font-medium">${item.price}</p>
              </div>
              <p className="text-gray-600">{item.desc}</p>
            </article>
          </div>
        );
      })}
    </div>
  );
}
export default Item;
