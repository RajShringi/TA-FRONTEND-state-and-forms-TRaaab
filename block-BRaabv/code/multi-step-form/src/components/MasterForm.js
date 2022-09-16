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
  handleChange = (e) => {
    const { id, value } = e.target;
    this.setState({
      [id]: value,
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
        <div className="basis-[70%]">
          <Step1 handleChange={this.handleChange} {...this.state} />
        </div>
      </form>
    );
  }
}
export default MasterForm;
