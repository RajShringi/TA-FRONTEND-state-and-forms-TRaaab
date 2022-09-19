import React from "react";
import data from "../data.json";
import Sizes from "./Sizes";
import Products from "./Products";
import { AiOutlineShoppingCart } from "react-icons/ai";

let allSizes = [];
data.products.forEach((item) => {
  item.availableSizes.forEach((size) => {
    if (!allSizes.includes(size)) {
      allSizes.push(size);
    }
  });
});

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      filterBySize: [],
      selected: "",
    };
  }

  handleFilter = (size) => {
    let sizeAlreadyInFilter = this.state.filterBySize.includes(size);
    let filterBySize;
    if (sizeAlreadyInFilter) {
      //remove size from filterBySize array;
      filterBySize = this.state.filterBySize.filter((s) => s !== size);
    } else {
      filterBySize = [...this.state.filterBySize, size];
    }

    this.setState({
      filterBySize,
    });
  };

  handleChange = (e) => {
    this.setState({
      selected: e.target.value,
    });
  };
  render() {
    // filter based on users gievn sizes
    let products;
    if (this.state.filterBySize.length === 0) {
      products = data.products;
      if (this.state.selected === "Lowest to highest") {
        products = [...data.products].sort((a, b) => a.price - b.price);
      }
      if (this.state.selected === "Highest to lowest") {
        products = [...data.products].sort((a, b) => b.price - a.price);
      }
    } else {
      products = data.products.filter((item) => {
        // if item.availableSizes = ['M', 'L'] then check if filterBySize(user selected size) have one of these sizes
        return item.availableSizes.some((size) =>
          this.state.filterBySize.includes(size)
        );
      });
      if (this.state.selected === "Lowest to highest") {
        products = [...products].sort((a, b) => a.price - b.price);
      }
      if (this.state.selected === "Highest to lowest") {
        products = [...products].sort((a, b) => b.price - a.price);
      }
    }
    return (
      <div className="container mx-auto flex justify-between items-start py-8 text-gray-700 relatvie">
        <div className="absolute top-0 right-0 bg-gray-800 p-2 rounded-bl-3xl cursor-pointer hover:bg-gray-900">
          <AiOutlineShoppingCart className="text-4xl text-gray-200" />
          <span className="bg-yellow-500 text-gray-800  text-sm rounded-full w-[20px] h-[20px] text-center inline-block absolute bottom-[-10px] right-1 ">
            2
          </span>
        </div>
        <Sizes
          filter={this.state.filterBySize}
          allSizes={allSizes}
          handleFilter={this.handleFilter}
        />
        <Products products={products} handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
