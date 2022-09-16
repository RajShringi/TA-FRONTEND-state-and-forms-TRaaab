import React from "react";
class Step2 extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    if (this.props.currentStep !== 2) {
      // Prop: The current step
      return null;
    }
    return (
      <div className="p-6 text-gray-700">
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
          <p className="text-sm text-gray-400">step 2/3</p>
          <h2 className="text-xl text-gray-900 font-bold">Message</h2>
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

        <div className="flex justify-start items-center">
          <input
            className="mr-2"
            type="radio"
            id="option1"
            name="option"
            value="The number one choice"
            onChange={this.props.handleChange}
          />
          The number one choice
          <input
            className="mr-2 ml-4"
            type="radio"
            id="option2"
            name="option"
            value="The number two choice"
            onChange={this.props.handleChange}
          />
          The number two choice
        </div>
      </div>
    );
  }
}

export default Step2;
