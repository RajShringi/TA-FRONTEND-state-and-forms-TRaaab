import React from "react";
import Modal from "./Modal";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
  }
  handleClick = () => {
    this.setState((prevState) => {
      return {
        isModalOpen: !prevState.isModalOpen,
      };
    });
  };
  render() {
    return (
      <div className="basis-[23%] mb-4 rounded-md overflow-hidden shadow-md">
        <div className="relative group">
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-[90%] hidden group-hover:flex justify-center items-center">
            <button
              onClick={this.handleClick}
              className="text-white py-2 px-4 rounded-md bg-white bg-opacity-10"
            >
              More Info
            </button>
          </div>
          <img
            className="w-full h-[180px] object-cover"
            src={this.props.Images[1]}
            alt={this.props.Title}
          />
        </div>
        <div className="p-2 text-center bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
          <h2 className="text-lg font-bold text-white">{this.props.Title}</h2>
          <p className="text-white">{this.props.Released}</p>
        </div>
        {this.state.isModalOpen && (
          <Modal handleClick={this.handleClick} {...this.props} />
        )}
      </div>
    );
  }
}
export default Movie;
