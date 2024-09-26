import logo from "../assets/Britlex.png";

function Footer() {
  return (
    <div className="flex justify-between items-center mb-[55px] footer">
      <a href="#home" className="cursor-pointer">
        <div className="w-[106px] h-[54px] footer__logo">
          <img
            src={logo}
            alt="footer__logo"
            className="w-full h-full object-contain"
          ></img>
        </div>
      </a>

      <p className="text-[24px] text-[#8F95A5] text-nowrap footer__text">
        Terms and Conditions • Privacy Policy • Cookie Policy
      </p>
    </div>
  );
}
export default Footer;
