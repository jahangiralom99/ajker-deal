import { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [isAddingAddress, setIsAddingAddress] = useState(false);
    const [customerName, setCustomerName] = useState("CustomerName");
    const [customerEmail, setCustomerEmail] = useState("Customeremail@gmail.com");
    const [shippingAddress, setShippingAddress] = useState("shipping address here");
    const [billingAddress, setBillingAddress] = useState("billing address here");

    const handleEditClick = () => {
        setIsEditing(!isEditing);
    };

    const handleAddAddressClick = () => {
        setIsAddingAddress(!isAddingAddress);
    };

    const handleNameChange = (e) => {
        setCustomerName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setCustomerEmail(e.target.value);
    };

    const handleShippingAddressChange = (e) => {
        setShippingAddress(e.target.value);
    };

    const handleBillingAddressChange = (e) => {
        setBillingAddress(e.target.value);
    };

    return (
        <div className="py-5 flex bg-[#EFF0F4] justify-center lg:gap-10 md:gap-7 flex-col md:flex-row ">
            {/* left section */}
            <section className="lg:w-[20%] lg:pl-20 pl-3">
                <div>
                    <p className="text-sm pb-2">Hello, {customerName}</p>
                    <ul className="font-bold flex flex-col gap-3">
                        <li>
                            <p className="hover:text-blue-500">Manage My Account</p>
                            <ul className="pl-5 font-medium flex flex-col gap-2">
                                <li className="hover:text-blue-500">My Profile</li>
                                <li className="hover:text-blue-500">Address Book</li>
                                <li className="hover:text-blue-500">My Payment Options</li>
                                <li className="hover:text-blue-500">Daraz Wallet</li>
                                <li className="hover:text-blue-500">Vouchers</li>
                            </ul>
                        </li>
                        <li>
                            <p className="hover:text-blue-500">My Order</p>
                            <ul className="pl-5 font-medium flex flex-col gap-2">
                                <li className="hover:text-blue-500">My Returns</li>
                                <li className="hover:text-blue-500">My Cancellations</li>
                            </ul>
                        </li>
                        <li className="hover:text-blue-500">My Reviews</li>
                        <li className="hover:text-blue-500">My Wishlist</li>
                        <li className="hover:text-blue-500">Followed Stores</li>
                        <li className="hover:text-blue-500">Sell on Daraz</li>
                    </ul>
                </div>
            </section>

            {/* right section */}
            <section className="lg:w-[80%] ">
                <h1 className="font-bold text-center md:text-start text-2xl pb-3 pl-3 md:pl-0 pt-5 md:pt-0">
                    Manage My Account
                </h1>

                <div className="flex gap-3 flex-col lg:flex-row">
                    <div className="bg-white xl:w-[25%] p-3 pb-10 ">
                        <p className="text-lg font-medium">
                            Personal Profile |{" "}
                            <span className="text-blue-500 cursor-pointer" onClick={handleEditClick}>
                                {isEditing ? "SAVE" : "EDIT"}
                            </span>
                        </p>
                        <br />
                        {isEditing ? (
                            <>
                                <input
                                    type="text"
                                    value={customerName}
                                    onChange={handleNameChange}
                                    className="border p-2 w-full mb-2"
                                />
                                <input
                                    type="email"
                                    value={customerEmail}
                                    onChange={handleEmailChange}
                                    className="border p-2 w-full"
                                />
                            </>
                        ) : (
                            <>
                                <p>{customerName}</p>
                                <p>{customerEmail}</p>
                            </>
                        )}
                        <br />
                        <p className="text-blue-500">Subscribe to our Newsletter</p>
                    </div>
                    <div className="xl:w-[50%] bg-white flex p-3 md:justify-evenly">
                        <div className="md:border-r xl:pr-20 lg:pr-10 flex flex-col gap-3">
                            <h3 className="text-lg font-medium">
                                Address Book | <span className="text-blue-500 cursor-pointer" onClick={handleAddAddressClick}>ADD</span>
                            </h3>
                            <br />
                            <p>   {isAddingAddress ? 
                                                      ( <>  
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        placeholder="Shipping Address"
                                        value={shippingAddress}
                                        onChange={handleShippingAddressChange}
                                        className="border p-2 w-full mb-5"
                                    />
                                     <IoLocationOutline className="text-3xl" />
                                  
                                </div>
                                </>
                            ) :( 
                            <>
                                <p>{shippingAddress}</p>

                               
                                
                                </>
                            )}</p>
                         
                         
                        </div>
                        <div className="pt-16 px-6 hidden md:block">
                        <p>   {isAddingAddress ? 
                                                      ( <>  
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        placeholder="Billing Address"
                                        value={billingAddress}
                                        onChange={handleBillingAddressChange}
                                        className="border p-2 w-full mb-2"
                                    />
                                
                                  
                                </div>
                                </>
                            ) :( 
                            <>
                                <p>{billingAddress}</p>

                               
                                
                                </>
                            )}</p>

                        
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Profile;
