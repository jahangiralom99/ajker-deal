import Banner from "../../components/banner/Banner";

// import HotDeal from "../../components/hotDeal/HotDeal";
import MobileBike from "../../components/mobileBike/MobileBike";

import MobileFram from "../../components/mobileFrame/MobileFram";

import PopularItem from "../../components/popularItem/PopularItem";
import SwiperMobile from "../../components/swiperMobile/SwiperMobile";
import Title from "../../components/title/Title";
import {useContext} from "react";
import {GroupsContext, ItemContext, WebContext} from "../../App";
import Gadgets from "../../components/gadgets/Gadgets";
import Motorbike from "../../components/motorBike/Motorbike";
import FramPart from "../../components/framPart/FramPart";
import Consumable from "../../components/consumable/Consumable";
import IPhone from "../../components/iPhone/IPhone";
import Raw from "../../components/raw/Raw";
import Services from "../../components/services/Services";
import Multi from "../../components/multi/Multi";

const HomeMain = () => {
  const grpData = useContext(GroupsContext);
  const webItmData = useContext(WebContext);
  const itemData = useContext(ItemContext);

  return (
    <>
      <Title title="Home" />

      <Banner />
      <SwiperMobile />
      <div className="bg-[#F5F5F5]">
        {/* <HotDeal  grpData={grpData} webItmData={webItmData} itemData={itemData}/> */}
        <Gadgets grpData={grpData} webItmData={webItmData} itemData={itemData} />
        <Consumable />
        <IPhone />
        <Multi />
        <Raw />
        <Services />
        <Motorbike />
        <FramPart />
      </div>

      <MobileFram />
      <PopularItem />
      <MobileBike />
    </>
  );
};

export default HomeMain;
