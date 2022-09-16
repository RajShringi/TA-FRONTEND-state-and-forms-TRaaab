import React from "react";
class Step3 extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    if (this.props.currentStep !== 3) {
      // Prop: The current step
      return null;
    }
    return (
      <div className="">
        <header className="mb-8">
          <div className="mb-8 border-b pb-3 flex justify-start items-center">
            <div className="mr-8">
              <span
                className={`inline-block py-1 px-3 rounded-lg ${
                  this.props.currentStep === 1 ? "bg-red-500" : "bg-gray-200"
                } text-white mr-2`}
              >
                1
              </span>
              <span className="text-sm text-gray-400">Sign Up</span>
            </div>
            <div className="mr-8">
              <span
                className={`inline-block py-1 px-3 rounded-lg ${
                  this.props.currentStep === 2 ? "bg-red-500" : "bg-gray-200"
                } text-white mr-2`}
              >
                2
              </span>
              <span className="text-sm text-gray-400">Message</span>
            </div>
            <div>
              <span
                className={`inline-block py-1 px-3 rounded-lg ${
                  this.props.currentStep === 3 ? "bg-red-500" : "bg-gray-200"
                } text-white mr-2`}
              >
                3
              </span>
              <span className="text-sm text-gray-400">Checkbox</span>
            </div>
          </div>
          <p className="text-sm text-gray-400">step 3/3</p>
          <h2 className="text-xl text-gray-900 font-bold">Checkbox</h2>
        </header>

        <label className="text-sm mr-8 basis-[45%]">
          Message
          <textarea
            id="message"
            name="message"
            className="border block p-2 rounded-lg w-full"
            value={this.props.message}
            onChange={this.props.handleChange}
            rows="5"
          ></textarea>
        </label>

        <div>
          <label className="block text-sm">
            <input
              className="mr-2"
              type="radio"
              id="option1"
              name="checkboxOption"
              value="I want to add this option"
              onChange={this.props.handleChange}
            />
            I want to add this option
          </label>
          <label className="block text-sm">
            <input
              className="mr-2"
              type="radio"
              id="option1"
              name="checkboxOption"
              value="Let me click on this checkbox and choose some cool stuff"
              onChange={this.props.handleChange}
            />
            Let me click on this checkbox and choose some cool stuff
          </label>
        </div>
      </div>
    );
  }
}

export default Step3;
