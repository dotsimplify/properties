import React, { useState } from "react";
import SeoHeadTags from "../Components/SeoHeadTags";
import { seo } from "../usefulSEO";
/* import Modal from "../components/Modal"; */
/* import SeoHeadTags from "../components/SeoHeadTags";
import { seo } from "../usefulSeo"; */

const Contact = () => {
  const [fullName, setFullName] = useState("");

  const [email, setEmail] = useState("");

  const [phone, setPhone] = useState("");

  const [phoneError, setPhoneError] = useState("");

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const [res, setRes] = useState("");

  /*  const OnSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) return setPhoneError("Enter 10 Digits Number");

    setLoading(true);

    fetch(`${process.env.NEXT_PUBLIC_BASE_API_URL}/leads`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: fullName,

        email: email,

        phone: phone,

        message: message,
      }),
    })
      .then((res) => res.json())

      .then((data) => {
        setFullName("");

        setEmail("");

        setPhone("");

        setMessage("");

        setRes(data);

        setTimeout(() => {
          setLoading(false);

          setRes("");
        }, 5000);
      });
  }; */
  return (
    <>
      <SeoHeadTags
        title={seo.contact.title}
        Url={seo.contact.cenonicalUrl}
        description={seo.contact.description}
        keyword={seo.contact.keyword}
      />
      <div className=" pt-32 px-2 md:px-4 lg:px-6 xl:px-8">
        {/* <Modal isOpen={phoneError} setIsOpen={setPhoneError} /> */}
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" font-bold text-3xl text-gray-800">Contact Us</h1>
          <h1 className=" text-gray-700 text-lg  px-40 pt-8">
            Say Hello send us your thoughts about our products or share
          </h1>
          <h1 className=" text-gray-700 text-lg  px-40 ">
            your ideas with our Team!
          </h1>
        </div>
        <form /* onSubmit={OnSubmit} */ method="post">
          <div className=" xl:mx-56 xl:space-y-12 py-20">
            <div className=" flex flex-col md:flex-row justify-center items-center md:space-y-0  md:space-x-14 space-y-12 xl:space-x-28 ">
              <input
                className=" outline-none border-b transition-all duration-500 ease-in-out focus:pl-2 pl-1 border-gray-300 w-full py-1"
                placeholder="Full name"
                required
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                value={fullName}
              />
              <input
                className=" outline-none border-b transition-all duration-500 ease-in-out focus:pl-2 pl-1 border-gray-300 w-full py-1"
                placeholder="Phone"
                required
                type="number"
                minLength={10}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                value={phone}
              />
            </div>
            <div className=" flex flex-col md:flex-row justify-center items-center space-y-12 md:space-y-0  mt-12 md:space-x-14 xl:space-x-28 ">
              <input
                className=" outline-none border-b transition-all duration-500 ease-in-out focus:pl-2 pl-1 border-gray-300 w-full py-1"
                placeholder="Email"
                type="email"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
              <input
                className=" outline-none border-b transition-all duration-500 ease-in-out focus:pl-2 pl-1 border-gray-300 w-full py-1"
                placeholder="Subject"
              />
            </div>
            <textarea
              className=" outline-none border-b resize-none mt-12 transition-all duration-500 ease-in-out focus:pl-2 pl-1 border-gray-300 w-full py-1"
              placeholder="Message"
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              value={message}
            />
            <div className=" w-full mt-12 md:px-32 xl:px-56">
              <button
                type="submit"
                className=" py-2 px-4 bg-buttonColor text-white font-semibold w-full transition-all duration-300 ease-in-out rounded-md hover:bg-transparent hover:text-buttonColor border-2 border-buttonColor"
              >
                {loading && !res
                  ? "Sending ..."
                  : loading && res
                  ? "😊 Sent Successfully 👍 "
                  : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
