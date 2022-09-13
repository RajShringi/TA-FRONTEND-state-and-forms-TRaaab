import React from "react";
import data from "../data";
import Items from "../components/Items";

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
    };
  }
  handleClick = (category) => {
    this.setState({
      category: category,
    });
  };
  render() {
    const categories = [
      "All",
      ...new Set(data.map((category) => category.category)),
    ];
    let items;
    if (!this.state.category) {
      items = data;
    } else {
      items = data.filter((item) => item.category === this.state.category);
      console.log(items);
    }
    return (
      <>
        <div className="space-x-8 my-8 text-center">
          {categories.map((category) => {
            let cat = category === "All" ? "" : category;
            return (
              <button
                onClick={() => this.handleClick(cat)}
                className={`px-2 py-1 rounded-lg capitalize hover:bg-yellow-600 hover:text-white ${
                  this.state.category === cat
                    ? "bg-yellow-600 text-white"
                    : "text-yellow-600"
                }`}
                key={category}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div>
          <Items items={items} />
        </div>
      </>
    );
  }
}
export default Categories;
