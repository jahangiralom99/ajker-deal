import { TfiMenuAlt } from "react-icons/tfi";
import category1 from '../../assets/category1.png'
import { FaChevronDown } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const AllCategory = () => {
    return (
        <div className="bg-[#F2F2F2] p-10 ">

            <Helmet>
                <meta charSet="utf-8" />
                <title>Ajker Deal | All Category</title>
                <link rel="canonical" href="http://static.ajkerdeal.com/images/dealdetails/ad-logo.svg" />
            </Helmet>




            <div className="bg-white max-w-[1100px] mx-auto p-3 pb-32 ">


            <div className="flex justify-start items-center gap-2 text-xl text-[#F15B2D] py-5">
            <div><TfiMenuAlt /></div>
            <div>সকল ক্যাটাগরি</div>
                </div>    

                <hr className="pt-5" />

                {/* category div start */}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">

                 
                    <div className="group relative cursor-pointer">
                       
                       
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a  href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
                    </div>
                    
                    <hr />
                    {/* sub category start */}
                    <ul className="absolute w-60 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                        
                    </ul>
                    {/* sub category end */}

                    </div>
                    <div className="group relative cursor-pointer">
                       
                       
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a  href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
                    </div>
                    
                    <hr />
                    {/* sub category start */}
                    <ul className="absolute w-60 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                        
                    </ul>
                    {/* sub category end */}

                    </div>
                    <div className="group relative cursor-pointer">
                       
                       
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a  href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
                    </div>
                    
                    <hr />
                    {/* sub category start */}
                    <ul className="absolute w-60 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                        
                    </ul>
                    {/* sub category end */}

                    </div>
                    <div className="group relative cursor-pointer">
                       
                       
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a  href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
                    </div>
                    
                    <hr />
                    {/* sub category start */}
                    <ul className="absolute w-60 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                        
                    </ul>
                    {/* sub category end */}

                    </div>
                    <div className="group relative cursor-pointer">
                       
                       
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a  href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
                    </div>
                    
                    <hr />
                    {/* sub category start */}
                    <ul className="absolute w-60 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                        
                    </ul>
                    {/* sub category end */}

                    </div>
                    <div className="group relative cursor-pointer">
                       
                       
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a  href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
                    </div>
                    
                    <hr />
                    {/* sub category start */}
                    <ul className="absolute w-60 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                        
                    </ul>
                    {/* sub category end */}

                    </div>
                    <div className="group relative cursor-pointer">
                       
                       
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a  href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
                    </div>
                    
                    <hr />
                    {/* sub category start */}
                    <ul className="absolute w-60 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                        
                    </ul>
                    {/* sub category end */}

                    </div>
                    <div className="group relative cursor-pointer">
                       
                       
                    <div className="flex justify-between items-center">
                        <div className="flex justify-center items-center gap-3">

                        <a href="#"><img className="w-7" src={category1} alt="" /></a>
                        <a href="#" className="text-sm hover:text-[#F15B2D]">ছেলেদের ফ্যাশন</a>
                        </div>
                        <a  href="#"><FaChevronDown className="text-blue-500 text-sm " /></a>
                    </div>
                    
                    <hr />
                    {/* sub category start */}
                    <ul className="absolute w-60 left-8 top-6 group-hover:block hidden p-3 bg-white z-10">
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                    <Link to='/category'>  
                        <li className="mb-2 hover:text-[#F15B2D]">
                            sub1
                            <hr />
                        </li> 
                    </Link>
                        
                    </ul>
                    {/* sub category end */}

                    </div>
                  
                   

                </div>
                {/* category div end */}
            </div>
            
        </div>
    );
};

export default AllCategory;