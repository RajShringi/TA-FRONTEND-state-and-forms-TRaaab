import React from "react";
class Step1 extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    if (this.props.currentStep !== 1) {
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
          <p className="text-sm text-gray-400">step 1/3</p>
          <h2 className="text-xl text-gray-900 font-bold">Sign Up</h2>
        </header>
        <div className="flex justify-between items-center mb-6">
          <label className="text-sm mr-8 basis-[45%]">
            First Name
            <input
              id="firstName"
              name="firstName"
              className="border block p-2 rounded-lg w-full"
              type="text"
              value={this.props.firstName}
              onChange={this.props.handleChange}
            />
          </label>
          <label className="text-sm  basis-[45%]">
            Last Name
            <input
              id="lastName"
              name="lastName"
              className="border block p-2 rounded-lg w-full"
              type="text"
              value={this.props.lastName}
              onChange={this.props.handleChange}
            />
          </label>
        </div>
        <div className="flex justify-between items-center mb-6">
          <label className="text-sm mr-8 basis-[45%]">
            Date of Birth
            <input
              id="dob"
              name="dob"
              className="border block p-2 rounded-lg w-full"
              type="date"
              value={this.props.dob}
              onChange={this.props.handleChange}
            />
          </label>
          <label className="text-sm  basis-[45%]">
            Email
            <input
              id="email"
              name="email"
              className="border block p-2 rounded-lg w-full"
              type="email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </label>
        </div>
        <label className="text-sm">
          Address
          <input
            id="address"
            name="address"
            className="border block p-2 rounded-lg w-full"
            type="text"
            value={this.props.address}
            onChange={this.props.handleChange}
          />
        </label>
      </div>
    );
  }
}

export default Step1;
