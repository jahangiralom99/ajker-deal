import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

const From = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const [value, setValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    console.log(value);
  };

  return (
    <section className="max-w-screen-xl mx-auto px-3 mt-8 pb-3">
      <div>
        <h1 className="text-3xl font-extrabold text-[#d3ac2b] text-center">
          অর্ডার করতে নিচের ফর্মটি সঠিক ভাবে পুরন করুন।
        </h1>
        <p className="text-xl font-extrabold max-w-screen-md mx-auto text-red-500 text-center mt-4 leading-10	">
          আবায়া/বোরকার সাইজ অর্ডার ফর্মে উল্লেখ করে অর্ডার করার অনুরোধ রইলো। <br />
          ছবিতে কালারগুলো ভালোভাবে দেখে পছন্দ করে অর্ডার ফর্মে কালার উল্লেখ করে অর্ডার করার অনুরোধ।
        </p>
      </div>
      {/* From starts */}
      <section className="flex flex-col gap-6 md:flex-row justify-center mt-12 ">
        <div className="w-full md:flex-1">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-xl font-semibold">Billing details</h1>
            <div className="mt-4 ">
              <label className="block text-sm font-bold mb-2">
                আপনার নাম <span className="text-red-500">*</span>
              </label>
              <input
                className="bg-gray-200  focus:outline-none focus:shadow-outline border border-gray-300  py-3 px-4 block w-full appearance-none"
                type="text"
                {...register("name", {required: true})}
                placeholder="আপনার নাম লিখুন"
                id="text"
                autoComplete="text"
              />
              {errors.name && <p className="text-red-600">আপনার নাম is Required</p>}
            </div>
            <div className="mt-4 ">
              <label className="block text-sm font-bold mb-2">
                আপনার ঠিকানা <span className="text-red-500">*</span>
              </label>
              <input
                className="bg-gray-200  focus:outline-none focus:shadow-outline border border-gray-300  py-3 px-4 block w-full appearance-none"
                type="text"
                {...register("address", {required: true})}
                placeholder="আপনার ঠিকানা লিখুন"
                id="text"
                autoComplete="text"
              />
              {errors.address && <p className="text-red-600">আপনার ঠিকানা is Required</p>}
            </div>
            <div className="mt-4 ">
              <label className="block text-sm font-bold mb-2">
                মোবাইল নাম্বার <span className="text-red-500">*</span>
              </label>
              <input
                className="bg-gray-200  focus:outline-none focus:shadow-outline border border-gray-300  py-3 px-4 block w-full appearance-none"
                type="number"
                {...register("number", {required: true})}
                placeholder="আপনার মোবাইল নাম্বার"
                id="number"
                autoComplete="number"
              />
              {errors.number && <p className="text-red-600">মোবাইল নাম্বার is Required</p>}
            </div>
            <div className="mt-4">
              <h4 className="text-xl lg:text-2xl font-semibold">
                Country / Region <span className="text-red-500">*</span>
              </h4>
              <h4 className="mt-3 font-bold">কালার * </h4>
              <div onChange={(e) => setValue(e.target.name)}>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" id="1" value="1" type="radio" name="ডিপ সি-গ্রীন কালার" />
                  <i className="pl-2">ডিপ সি-গ্রীন কালার</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" id="2" value="2" type="radio" name="রোজ পিংক কালার" />

                  <i className="pl-2">রোজ পিংক কালার</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" type="radio" name="ব্ল্যাক কালার" />

                  <i className="pl-2">ব্ল্যাক কালার</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" type="radio" name="অলিভ কালার" />

                  <i className="pl-2">অলিভ কালার</i>
                </label>
              </div>
              <div className="mt-6">
                <h1 className="font-bold">সাইজ (optional)</h1>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" id="1" value="1" type="radio" name="52" />
                  <i className="pl-2">52</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" id="2" value="2" type="radio" name="54" />

                  <i className="pl-2">54</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" type="radio" name="56" />

                  <i className="pl-2">56</i>
                </label>
                <label className="flex px-3 py-2 my-3 cursor-pointer ">
                  <input className="accent-red-500" type="radio" name="কাস্টমাইজ" />

                  <i className="pl-2">কাস্টমাইজ</i>
                </label>
              </div>
            </div>
            <div className="">
              <button className="border border-red-500 p-5" type="submit">
                Buy Products
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 p-2">
          <h1 className="text-xl font-semibold">Your order</h1>
          <div className="flex justify-between items-center mt-7 px-3">
            <h1 className="font-semibold">Product</h1>
            <h1 className="font-semibold">Subtotal </h1>
          </div>
          <p className="w-full border border-dotted mt-3"></p>
          <div className="mt-5 flex items-center justify-between px-3 ">
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12"
                src="https://nazatfashion.com/wp-content/uploads/2024/01/Sabiha-0106.png.webp"
                alt="Abaya E Sabiha"
              />
              <p>Abaya E Sabiha</p>
            </div>
            <p>× 1 1,940.00৳ </p>
          </div>
          <p className="w-full border border-dotted mt-3"></p>
          <div className="mt-5 flex items-center justify-between px-3">
            <h1>Subtoal </h1>
            <p> 1,940.00৳ </p>
          </div>
          <div className="flex items-center justify-between mt-5">
            <p>Shipping</p>
            <div>
              <label className="flex px-3 py-2 my-3 cursor-pointer ">
                <input className="accent-red-500" id="1" value="1" type="radio" name="52" />
                <i className="pl-2">ঢাকার বাহিরে: 110.00৳ </i>
              </label>
              <label className="flex px-3 py-2 my-3 cursor-pointer ">
                <input className="accent-red-500" id="2" value="2" type="radio" name="54" />

                <i className="pl-2">ঢাকার ভিতরে: 60.00৳ </i>
              </label>
            </div>
          </div>
          <p className="w-full border border-dotted mt-3"></p>
          <div className="flex items-center justify-between mt-3">
            <h1 className="font-bold">Total </h1>
            <h1 className="font-bold">2,000.00৳</h1>
          </div>
          <div className="bg-[#f7f7f7] mt-7 p-3">
            <h1>ক্যাশঅন ডেলিভারি</h1>
            <p className="mt-2">হাতে পন্য পেয়ে পেমেন্ট করুন</p>
          </div>
          <div>
            <button></button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default From;
