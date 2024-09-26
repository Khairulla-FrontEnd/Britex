import { useState, useEffect } from "react";
import contact from "../assets/contact.png";

function Contact() {
  const [title, setTitle] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 564) {
        setTitle(true);
      } else {
        setTitle(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      id="contacts"
      className="flex justify-between items-center border-b-2 border-[#C4C4C4] pb-[133px] mb-[31px] contact"
    >
      {title && (
        <h1 className="text-[48px] font-semibold contact__title">Contact Us</h1>
      )}
      <div className="w-[477px] h-[429px] contact__img">
        <img
          src={contact}
          alt="contact__img"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <div className="flex flex-col justify-center gap-[45px] contact__text">
        {!title && (
          <h1 className="text-[48px] font-semibold contact__title">
            Contact Us
          </h1>
        )}
        <p className="text-[20px] leading-[30px] text-[#8F95A5] w-[776px] contact__subtitle">
          Discover your current English level by taking our free online English
          test.Sign up to our newsletter for learning tips and free resources
        </p>
        <div className="flex items-center gap-[12px] contact__things">
          <input
            type="text"
            placeholder="Enter Your E-mail"
            className="outline-none py-[26px] px-[33px] rounded-[10px] border-2 border-[#8F95A5] w-[450px] contact__input"
          ></input>
          <button
            className="text-white bg-[#263238] py-[25px] px-[80px] rounded-[10px] text-[20px] border-2 border-[#263238]
                hover:text-black hover:bg-white transition duration-500 contact__btn"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
export default Contact;
