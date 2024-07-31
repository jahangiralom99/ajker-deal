import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
// import {ItemContext} from "../App";
import {FaShoppingCart} from "react-icons/fa";
import {FaCheckCircle} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import From from "../components/landing/From";
import From from "../../pages/landing/files/From";
// import Title from "../components/title/Title";
// import { ItemContext } from "../../../Root";
import Title from "../../components/title/Title";
import {ItemContext} from "../../App";
// import From from "./files/From";

const Item = () => {
  const {name} = useParams();
  const itemData = useContext(ItemContext);
  const [loader, setLoader] = useState(true);
  const [landing, setLanding] = useState([]);

  useEffect(() => {
    let itmFind = itemData.find((item) => item.name === name);
    setLanding([itmFind]);
    setLoader(false);
  }, [name, itemData]);

  const formatStyle = (params) => {
    if (landing[0] && landing[0][params]) {
      return landing[0][params].split("<br>").map((part, index, parts) => (
        <span key={index}>
          {part}
          {index < parts.length - 1 && <br />}
        </span>
      ));
    }
  };
  return (
    <>
      <Title title="Item" />

      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <section className="bg-[#F4F3EA] mt-3 py-5">
          {/* Top Bar Section */}
          <div className="mt-8 mx-auto max-w-screen-xl px-3">
            <h2 className="font-extrabold text-center text-2xl leading-8	">
              {formatStyle("custom_heading_1")}
              <span className="text-[#d3ac2b] ml-2">{formatStyle("custom_heading_2")} </span> <br />
              {formatStyle("custom_headings_3")}
            </h2>
            <div className="mt-8 text-center"></div>

            <div className="text-center mt-6 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	flex justify-center items-center">
              <button className="font-extrabold py-4 md:px-[85px] px-[40px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                <FaShoppingCart />
                অর্ডার করতে চাই
              </button>
            </div>
            <h1 className="text-red-500 font-extrabold text-2xl text-center mt-8 ">{formatStyle("custom_heading_4")}</h1>
          </div>

          {/* আবায়া-ই সাবিহা Section */}
          <section className="my-8 bg-[#F4F3EA]  px-3 py-12">
            <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4  gap-4 pt-12">
              <div className="border-2 border-[#d3ac2b]">
                <img src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0106.png.webp" alt="" />
                <p className="text-center font-extrabold p-2">ডিপ সি-গ্রীন কালার</p>
              </div>
              <div className="border-2 border-[#d3ac2b]">
                <img className="border-2 border-[#d3ac2b]" src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0102.png.webp" alt="" />
                <p className="text-center font-extrabold p-2">রোজ পিংক কালার</p>
              </div>
              <div className="border-2 border-[#d3ac2b]">
                <img className="border-2 border-[#d3ac2b]" src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0110.png.webp" alt="" />
                <p className="text-center font-extrabold p-2">ব্ল্যাক কালার</p>
              </div>
              <div className="border-2 border-[#d3ac2b]">
                <img className="border-2 border-[#d3ac2b]" src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0108.png.webp" alt="" />
                <p className="text-center font-extrabold p-2">অলিভ কালার</p>
              </div>
            </div>
            <div></div>
          </section>
          {/* Order now section  */}
          <div className="max-w-screen-xl mx-auto p-3 text-center">
            <h1 className="font-extrabold text-3xl">
              {formatStyle("custom_heading_5")}
              <span className="relative">
                {formatStyle("custom_heading_6")}
                <svg className="w-28 absolute -left-6 top-1 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                  <path fill="red" d="M497.4,23.9C301.6,40,155.9,80.6,4,144.4"></path>
                  <path fill="red" d="M14.1,27.6c204.5,20.3,393.8,74,467.3,111.7"></path>
                </svg>
              </span>
              {formatStyle("custom_heading_7")}
            </h1>
            <h1 className="font-extrabold text-4xl mt-4 text-[#D3AC2B]">
              {formatStyle("custom_heading_8")}
              <span className="relative ml-2 mr-2 text-[#38b000]">
                {formatStyle("custom_heading_9")}
                <svg className="w-44 absolute -left-8 -top-[68px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" preserveAspectRatio="none"></svg>
              </span>
              {formatStyle("custom_heading_7")}
            </h1>
            <h2 className="mt-5 text-red-500 text-2xl font-extrabold">{formatStyle("custom_heading_10")}</h2>
            {/* <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300	">
          <button className="font-extrabold py-4 md:px-[85px] px-[40px] bg-[#d3ac2b] rounded-full flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
            <FaShoppingCart />
            অর্ডার করতে চাই
          </button>
        </div> */}
          </div>
          {/* card Section */}

          <section className="max-w-screen-xl mt-8 mx-auto p-5">
            <div>
              <div className="md:ml-44">
                <h1 className="font-extrabold text-3xl text-[#d3ac2b]">{formatStyle("custom_heading_11")}</h1>
                <div className="flex items-center gap-2 mt-6">
                  <p className="h-3 w-6 bg-[#38B000]"></p>
                  <p className="h-3 w-6 bg-[#38B000]"></p>
                  <p className="h-3 w-6 bg-[#38B000]"></p>
                  <p className="h-3 w-6 bg-[#38B000]"></p>
                </div>
                <div className="mt-6 flex items-center gap-3 font-bold">
                  <FaCheckCircle className="text-2xl text-[#38B000]" />
                  <p>{formatStyle("custom_heading_12")}</p>
                </div>
                <div className="mt-6 flex items-center gap-3 font-bold">
                  <FaCheckCircle className="text-2xl text-[#38B000]" />
                  <p>{formatStyle("custom_heading_13")}</p>
                </div>
                <div className="mt-6 flex items-center gap-3 font-bold">
                  <FaCheckCircle className="text-2xl text-[#38B000]" />
                  <p>{formatStyle("custom_heading_14")}</p>
                </div>
                <div className="mt-6 flex items-center gap-3 font-bold">
                  <FaCheckCircle className="text-2xl text-[#38B000]" />
                  <p>{formatStyle("custom_heading_15")}</p>
                </div>
              </div>
              <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
                <button className="font-extrabold  md:px-[85px] px-[32px] bg-[#d3ac2b] rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                  <FaShoppingCart />
                  অর্ডার করতে চাই
                </button>
              </div>
            </div>
          </section>
          {/* --------------------- */}
          <section className="bg-[#F4F3EA] text-center mt-8 p-8">
            <div className="md:max-w-screen-xl md:mx-auto">
              <h1 className="text-3xl font-extrabold text-[#d3ac2b]">{formatStyle("custom_heading_16")}</h1>
              <div className="text-center mt-8 border-4 rounded-full md:w-96 mx-auto border-[#d3ac2b] hover:border-gray-800 p-2 hover:scale-110 duration-300 flex justify-center items-center	">
                <button className="font-extrabold  md:px-[85px] px-[22px] bg-[#d3ac2b] rounded-full py-3 flex items-center justify-center gap-1 text-xl text-white hover:bg-gray-800">
                  <FaShoppingCart />
                  অর্ডার করতে চাই
                </button>
              </div>
            </div>
          </section>

          {/* React Feom used */}
          <From formatStyle={formatStyle} />
        </section>
      )}
    </>
  );
};

export default Item;
