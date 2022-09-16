import React from "react";
import Step1 from "../components/Step1";
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
  render() {
    return (
      <div className="max-w-3xl rounded-lg mx-auto border min-h-[100px] overflow-hidden">
        <div className="flex justify-between items-stretch">
          <div className="basis-[30%]">
            <img
              className="w-full h-full object-cover"
              src="https://cdn.dribbble.com/users/499399/screenshots/5240261/rocket_illustration_4x.png"
              alt="rocket"
            />
          </div>
          <div className="basis-[70%]">
            <Step1 />
          </div>
        </div>
      </div>
    );
  }
}
export default MasterForm;
