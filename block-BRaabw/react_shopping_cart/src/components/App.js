import React from "react";
import data from "../data.json";
import Sizes from "./Sizes";
import Products from "./Products";

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
    };
  }
  handleFilter = (size) => {
    let sizeAlreadyInFilter = this.state.filterBySize.includes(size);
    if (sizeAlreadyInFilter) {
      //remove from filter array;
      let arr = this.state.filterBySize.filter((s) => s !== size);
      this.setState({
        filterBySize: arr,
      });
      return;
    }
    this.setState({
      //add to filter array;
      filterBySize: [...this.state.filterBySize, size],
    });
  };
  render() {
    // filter based on users gievn sizes
    let products;
    if (this.state.filterBySize.length === 0) {
      products = data.products;
    } else {
      products = data.products.filter((item) => {
        // if item.availableSizes = ['M', 'L'] then check if filter have one of these sizes
        return item.availableSizes.some((size) =>
          this.state.filterBySize.includes(size)
        );
      });
    }
    return (
      <div className="container mx-auto flex justify-between items-start py-8 text-gray-700">
        <Sizes
          filter={this.state.filterBySize}
          allSizes={allSizes}
          handleFilter={this.handleFilter}
        />
        <Products products={products} />
      </div>
    );
  }
}

export default App;
