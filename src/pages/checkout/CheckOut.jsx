/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Helmet } from "react-helmet";

const CheckOut = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-6 pb-5">


          <Helmet>
                <meta charSet="utf-8" />
                <title>Ajker Deal | Checkout</title>
                <link rel="canonical" href="http://static.ajkerdeal.com/images/dealdetails/ad-logo.svg" />
            </Helmet>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-[60%] mt-4 ">
          <h1 className="text-xl font-semibold ">BILLING & SHIPPING</h1>
          {/*From Start  */}
          <form className="mt-4">
            <div className="mt-6">
              <label htmlFor="" className="text-[16px] font-semibold">
                First name *
              </label>{" "}
              <br />
              <input
                className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6"
                type="text"
                name=""
                id=""
                placeholder="Your Name"
              />
            </div>
            <div className="mt-6">
              <p>Country / Region *</p>
              <p className="font-bold mt-2">Bangladesh</p>
            </div>
            <div className="mt-6">
              <label htmlFor="" className="text-[16px] font-semibold">
                Street address *
              </label>{" "}
              <br />
              <input
                className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6"
                type="text"
                name=""
                id=""
                placeholder="Your Name"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="" className="text-[16px] font-semibold">
                District *
              </label>{" "}
              <br />
              <select className="select rounded-full select-bordered w-full bg-[#f5f5f5]  border-gray-300 border mt-2">
                <option disabled selected>
                  Normal
                </option>
                <option>Kishoreganj</option>
                <option>Normal Orange</option>
                <option>Normal Tomato</option>
              </select>
            </div>
            <div className="mt-6">
              <label htmlFor="" className="text-[16px] font-semibold">
                Postcode / ZIP
              </label>{" "}
              <br />
              <input
                className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6"
                type="number"
                name=""
                id=""
                placeholder="1991"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="" className="text-[16px] font-semibold">
                Phone *
              </label>{" "}
              <br />
              <input
                className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6"
                type="number"
                name=""
                id=""
                placeholder="+88016********"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="" className="text-[16px] font-semibold">
                Email address *
              </label>{" "}
              <br />
              <input
                className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6"
                type="email"
                name="email"
                id="email"
                placeholder=""
              />
            </div>
            {/* Password And Account */}
            <div className="p-12 border-4 mt-6 rounded-md">
              <div className="mt-6">
                <label htmlFor="" className="text-[16px] font-semibold">
                  Account username *
                </label>{" "}
                <br />
                <input
                  className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6"
                  type="text"
                  name=""
                  id=""
                  placeholder="User name"
                />
              </div>
              <div className="mt-6">
                <label htmlFor="" className="text-[16px] font-semibold">
                  Create account password *
                </label>{" "}
                <br />
                <input
                  className="w-full py-2 rounded-full bg-[#f5f5f5]  border-gray-300 border mt-2 px-6"
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                />
              </div>
            </div>
            {/* ADDITIONAL INFORMATION */}
            <div className="mt-6">
              <h1 className="text-2xl font-semibold ">
                ADDITIONAL INFORMATION
              </h1>
              <p className="mt-4">
                ADDITIONAL INFORMATION (optional)
              </p>
              <div className="mt-4">
                <textarea
                  className="md:block hidden textarea textarea-bordered rounded-[50px] bg-[#f5f5f5]  border-gray-300 border px-6"
                  placeholder="Bio" cols='50' rows="4"
                ></textarea>
                <textarea
                  className="textarea textarea-bordered md:hidden bg-[#f5f5f5]  border-gray-300 border px-6"
                  placeholder="Bio" cols='35' rows="4"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-[40%]">
          <h1 className="text-center text-2xl font-semibold">YOUR ORDER</h1>
          <div className="rounded bg-white p-6 mt-5">
            <div className="flex gap-4 justify-between items-center ">
              <p className="font-semibold">PRODUCT</p>
              <p className="font-semibold">SUBTOTAL</p>
            </div>
            <hr className="mt-4" />
            <div className="flex items-center justify-between mt-6 text-gray-400">
              <p className="font-semibold text-sm">Baby Sweet × 1</p>
              <p className="font-bold">450৳</p>
            </div>
            <hr className="mt-4" />
            <div className="mt-6 flex items-center justify-between">
              <p className="font-semibold">Subtotal</p>
              <p className="text-xl font-semibold text-[#db3a87]">450৳</p>
            </div>
            <hr className="mt-4" />
            <div className="mt-5 flex items-center justify-between">
              <p className="font-semibold">Shipping</p>
              <p className="font-semibold">Delivery Charge (Free)</p>
            </div>
            <hr className="mt-4" />
            <div className="mt-5 flex items-center justify-between">
              <p className="font-semibold text-xl">Total</p>
              <p className="text-xl font-semibold text-[#db3a87]">450৳</p>
            </div>
          </div>
          <div className="mt-4">
            <p>Cash on delivery (DUE)</p>
            <div className="mt-4 bg-white p-5">
              <p className="font-semibold text-gray-400">
                Pay with cash upon delivery.
              </p>
            </div>
            <div className="mt-6">
              <label className="cursor-pointer flex items-baseline gap-6">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="checkbox checkbox-accent w-3 border-gray-500 h-3 rounded-none"
                />
                <p className="font-semibold">
                  I would like to receive exclusive emails with discounts and
                  product information
                </p>
              </label>
            </div>
            <hr className="mt-4" />
            <p className="mt-4">
              I have read and agree to the website's{" "}
              <span className="text-[#8d3041] cursor-pointer hover:text-red-500 font-bold">
                privacy policy.
              </span>
            </p>
            <hr className="mt-4" />
            <div className="mt-6">
              <label className="cursor-pointer flex items-baseline gap-6">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="checkbox checkbox-accent w-3 border-gray-500 h-3 rounded-none"
                />
                <p className="font-semibold">
                  I have read and agree to the{" "}
                  <span className="text-[#8d3041] hover:text-red-500 font-bold">
                    website terms and conditions *
                  </span>
                </p>
              </label>
            </div>
            <div className="bg-red-500 hover:bg-red-800 rounded-full text-center p-2 mt-6">
              <button className="text-white text-sm font-bold">
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
