import React from "react";
import Step1 from "../components/Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
class MasterForm extends React.Component {
  constructor(props) {
    super();
    this.state = {
      currentStep: 1,
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      address: "",
      message: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, firstName, lastName } = this.state;
    alert(`Your registration detail: \n 
    Email: ${email} \n 
    First Name: ${firstName} \n
    Last Name: ${lastName}`);
  };

  next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };
  prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  get previousButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <button
          className="text-red-500 text-sm mr-4"
          type="button"
          onClick={this.prev}
        >
          Back
        </button>
      );
    }
    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <button
          className="bg-red-500 py-2 px-4 text-sm text-gray-50 rounded-lg"
          type="button"
          onClick={this.next}
        >
          Next
        </button>
      );
    }

    // ...else render nothing
    return null;
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="max-w-3xl rounded-lg mx-auto border h-[500px] overflow-hidden flex justify-between items-stretch my-20"
      >
        <div className="basis-[30%]">
          <img
            className="w-full h-full object-cover"
            src="https://cdn.dribbble.com/users/499399/screenshots/5240261/rocket_illustration_4x.png"
            alt="rocket"
          />
        </div>
        <div className="basis-[70%] p-6 text-gray-700">
          <Step1 handleChange={this.handleChange} {...this.state} />
          <Step2 handleChange={this.handleChange} {...this.state} />
          <Step3 handleChange={this.handleChange} {...this.state} />
          <div className="mt-4 flex justify-end items-center border-t py-4">
            {this.previousButton}
            {this.nextButton}
            {this.state.currentStep === 3 ? (
              <button
                className="bg-red-500 py-2 px-4 text-sm text-gray-50 rounded-lg"
                type="submit"
              >
                Submit
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    );
  }
}
export default MasterForm;
