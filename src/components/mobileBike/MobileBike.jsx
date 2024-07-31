import {FaBangladeshiTakaSign, FaChevronRight} from "react-icons/fa6";
// import bikeImg from '../../assets/bike.webp'
// import mobileImg from '../../assets/mobile2.avif'

// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import './styles.css';

// import required modules
// import {Scrollbar } from 'swiper/modules';
import {useContext} from "react";
import {WebContext} from "../../App";
import {Link} from "react-router-dom";

const MobileBike = () => {
  const webItmData = useContext(WebContext);
  return (
    <div className="md:hidden block">
      <div className="flex justify-between items-center bg-[#fd7e53] px-4 py-1">
        <p className="text-white font-bold">Motor Bike</p>
        <p className="flex justify-center items-center text-white font-bold">
          {" "}
          More <FaChevronRight />
        </p>
      </div>

      {/* card start here */}

      <div className="bg-[#fdecb5] py-1">
        <div className="md:hidden pb-3 flex overflow-x-scroll gap-2 ">
          {webItmData
            .filter((item) => item.item_group === "iPhone Repair")
            .map((item, idx) => (
              <Link to={`../item/${item.item_code}`} key={idx}>
                <div className="flex justify-center items-center flex-col">
                  <div className="bg-white w-20 border-[#E0CF97] border-2  rounded my-3">
                    <div className="flex justify-end ">
                      {/* <section className="bg-[#E0CF97] w-12 h-4 flex
                justify-center items-center  text-sm rounded-bl-lg text-center font-bold z-10 ">Used</section> */}
                    </div>
                    <img className="p-1 w-20 mb-1" src={`https://erp.gawsiashop.com.bd${item.website_image}`} alt="" />
                    <p className="pl-1 text-[10px] text-center text-blue-700 font-bold">{item.web_item_name.length > 14 ? `${item.web_item_name.substring(0, 14)}...` : item.web_item_name}</p>
                    <p className="pl-3 text-[10px] flex justify-start items-center text-red-500 font-bold pb-2">
                      <FaBangladeshiTakaSign /> 1,80,000 /-
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
        <hr className="border-[#FD7E53] pb-2" />
      </div>
      {/* card end here */}
    </div>
  );
};

export default MobileBike;
