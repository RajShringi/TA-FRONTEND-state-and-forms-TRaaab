import React from "react";
class Step1 extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className="p-4 text-gray-700">
        <header className="mb-8">
          <div className="mb-8 border-b pb-3 flex justify-start items-center">
            <div className="mr-8">
              <span className="inline-block py-1 px-3 rounded-lg bg-red-500 text-white mr-2">
                1
              </span>
              <span className="text-sm text-gray-400">Sign Up</span>
            </div>
            <div className="mr-8">
              <span className="inline-block py-1 px-3 rounded-lg bg-gray-200 text-white mr-2">
                2
              </span>
              <span className="text-sm text-gray-400">Message</span>
            </div>
            <div>
              <span className="inline-block py-1 px-3 rounded-lg bg-gray-200 text-white mr-2">
                3
              </span>
              <span className="text-sm text-gray-400">Checkbox</span>
            </div>
          </div>
          <p className="text-sm text-gray-400">step 1/3</p>
          <h2 className="text-xl text-gray-900 font-bold">Sign Up</h2>
        </header>
        <div className="flex justify-start items-center mb-6">
          <label className="text-sm mr-8 basis-[45%]">
            First Name
            <input className="border block p-2 rounded-lg w-full" type="text" />
          </label>
          <label className="text-sm mr-8 basis-[45%]">
            Last Name
            <input className="border block p-2 rounded-lg w-full" type="text" />
          </label>
        </div>
        <div className="flex justify-start items-center mb-6">
          <label className="text-sm mr-8 basis-[45%]">
            Date of Birth
            <input className="border block p-2 rounded-lg w-full" type="date" />
          </label>
          <label className="text-sm mr-8 basis-[45%]">
            Email
            <input
              className="border block p-2 rounded-lg w-full"
              type="email"
            />
          </label>
        </div>
        <label className="text-sm">
          Address
          <input className="border block p-2 rounded-lg w-full" type="text" />
        </label>
      </div>
    );
  }
}

export default Step1;
