import {useContext} from "react";
// import mobileImg from '../../assets/mobile2.avif'
import {GroupsContext} from "../../App";
import {Link} from "react-router-dom";

const SwiperMobile = () => {
  const grpData = useContext(GroupsContext);
  return (
    <div className="mt-3 md:hidden flex overflow-x-scroll gap-7 pb-3 pt-3 px-2">
      {grpData.map((group, index) => (
        <Link to={`/category/${index}`} key={index}>
          <div className="flex justify-center items-center flex-col">
            <div className="border-2 w-12 bg-white rounded-full flex justify-center items-center">
              <img className="w-12 h-12 rounded-full" src={`https://erp.gawsiashop.com.bd${group.image}`} alt="" />
            </div>
            <div className="text-xs">{group.name.length > 5 ? `${group.name.slice(0, 5)}...` : group.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SwiperMobile;
