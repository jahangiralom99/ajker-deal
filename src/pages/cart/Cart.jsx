import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
// import Title from "../components/title/Title";
// import {addToProceed, getStrdCart, removeToCart} from "../utilities/Function";
import {RiDeleteBin6Line} from "react-icons/ri";
// import { CartContext } from "../../../Root";
// import { addToProceed, getStrdCart, removeToCart } from "../utilities/Function";
import Title from "../../components/title/Title";
import {CartContext} from "../../App";
import {addToProceed, getStrdCart, removeToCart} from "../../utilities/Function";
// import {CartContext} from "../App";

const calculateTotalPrice = (cartData, quantities) => {
  return cartData.reduce((total, item, idx) => total + item.standard_rate * quantities[idx], 0);
};

const Cart = () => {
  const navigate = useNavigate();
  const {cartItems, setCartItems} = useContext(CartContext);
  const [cartItmData, setCartItmData] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    let cart = getStrdCart("cart");
    setQuantities(cart.map((item) => item.qty));
    setTotalPrice(calculateTotalPrice(cart, quantities));
    setCartItmData(cart);
    setLoader(false);
  }, [loader]);

  const update = (index, newQty) => {
    if (newQty >= 0) {
      const updatedQuantities = [...quantities];
      updatedQuantities[index] = newQty;
      setQuantities(updatedQuantities);
      setTotalPrice(calculateTotalPrice(cartItmData, updatedQuantities));
    }
  };

  const handleCartDel = (key) => {
    removeToCart(key);
    setCartItems(cartItems - 1);
    setLoader(true);
  };

  const handleProceed = () => {
    const dataToSubmit = cartItmData.map((data, idx) => ({
      image: data.image,
      item_name: data.item_name,
      item_code: data.item_code,
      standard_rate: data.standard_rate,
      qty: quantities[idx],
      uom: data.uom,
      price: quantities[idx] * data.standard_rate,
    }));

    const dataToProceed = cartItmData.map((data, idx) => ({
      item_name: data.item_name,
      item_code: data.item_code,
      rate: data.standard_rate,
      qty: quantities[idx],
      uom: data.uom,
      amount: quantities[idx] * data.standard_rate,
    }));

    if (addToProceed(dataToSubmit, "cart")) {
      if (addToProceed(dataToProceed, "proceed")) {
        navigate("/checkout");
      }
    }
  };

  return (
    <>
      <Title title="Cart" />
      {loader ? (
        <progress className="progress w-56"></progress>
      ) : (
        <div className="mt-8 max-w-screen-xl mx-auto px-4 pb-5 bg-[#f9f9f9]">
          <div className="flex flex-col lg:flex-row gap-3 mt-12">
            <div className="lg:w-[70%] ">
              <div className=" overflow-x-auto">
                <table className=" w-full min-w-max table-auto text-left ">
                  <thead>
                    <tr className="text-sm text-center cursor-pointer border-y opacity-80 p-4">
                      <th className="p-4">No</th>
                      <th className="p-4">PRODUCT</th>
                      <th className="p-4">SKU</th>
                      <th className="p-4">PRICE</th>
                      <th className="p-4">QUANTITY</th>
                      <th className="p-4">SUBTOTAL</th>
                      <th className="p-4">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItmData.map((data, idx) => (
                      <tr key={idx} className="border-b border-blue-gray-50 text-center">
                        <td className="p-4">{idx + 1}</td>
                        <td className="p-4 flex items-center gap-3">
                          <img className="size-16 rounded-lg" src={`https://erp.gawsiashop.com.bd${data?.image}`} alt="" />
                          <p className="font-semibold">{data?.item_name}</p>
                        </td>
                        <td className="p-4">{data?.item_code}</td>
                        <td className="p-4">{data?.standard_rate}</td>
                        <td className="p-4 font-bold">
                          <div className="font-bold flex items-center cursor-pointer">
                            <span onClick={() => update(idx, quantities[idx] - 1)} className="border text-xl rounded-s-full px-3">
                              -
                            </span>
                            <input className="w-12 text-center px-2 border-2 border-black bg-black text-white focus:outline-none" type="text" value={quantities[idx]} readOnly />
                            <span onClick={() => update(idx, quantities[idx] + 1)} className="border text-xl  rounded-r-full px-3">
                              +
                            </span>
                          </div>
                        </td>
                        <td className="p-4  text-xl text-[#db3a87]">{quantities[idx] * data?.standard_rate} ৳</td>
                        <td className="text-2xl text-[#db3a87]">
                          <button onClick={() => handleCartDel(idx)}>
                            <RiDeleteBin6Line />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <hr className="mt-8" />
              <div className="mt-8 flex flex-col-reverse gap-6 lg:flex-row justify-between items-center">
                <div className="flex gap-4 items-center">
                  <input className="text-center border rounded-full py-2 md:px-4 " type="text" name="" id="" placeholder="Coupon Code" />
                  <button className="py-2 px-6 bg-red-500 hover:bg-red-800 font-bold text-white rounded-full text-sm">APPLY COUPON</button>
                </div>
                <div>
                  <button className="py-2 px-6 bg-red-400 hover:bg-red-800 font-bold text-white rounded-full text-sm">UPDATE CART</button>
                </div>
              </div>
            </div>
            <div className="lg:w-[30%] bg-white border-2 rounded p-5">
              <h1 className="text-2xl font-semibold">CART TOTALS</h1>
              <div className="flex items-center justify-between mt-6">
                <p className="font-semibold text-xl">Subtotal </p>
                <p className="font-bold">{totalPrice}৳</p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="font-semibold text-xl">Shipping</p>
                <div className="flex flex-col gap-3">
                  <p>Delivery Charge (Free)</p>
                  <p className="text-[#77777]">
                    Shipping to <span className="font-bold">Kishoreganj.</span>
                  </p>
                  <p className="text-[#db3a87] text-xl font-semibold">Change address</p>
                </div>
              </div>
              <hr className="mt-4" />
              <div className="mt-5 flex items-center justify-between">
                <p className="font-semibold text-xl">Total</p>
                <p className="text-xl font-semibold text-[#db3a87]">{totalPrice}৳ </p>
              </div>
              <div className="bg-red-500 hover:bg-red-800 rounded-full text-center p-2 mt-6">
                <button onClick={() => handleProceed()} className="text-white text-sm font-bold">
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
