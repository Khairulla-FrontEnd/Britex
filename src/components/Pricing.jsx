import { PricingData } from "../data/PricingData.js";

function Pricing() {
  return (
    <div id="pricing" className="mb-[261px] PRICING">
      <h1 className="text-5xl font-semibold text-center mb-20 pricing__main__title">
        Pricing
      </h1>
      <div className="flex justify-between items-center pricing">
        {PricingData.map((item) => {
          return (
            <div key={item.id} className="pricing__main">
              <div className={item.imgSize + ` pricing__img${item.id}`}>
                <img
                  src={item.imgSrc}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col justify-between h-52 pricing__text">
                <h1 className="text-[30px] font-semibold text-[#263238] pricing__title">
                  {item.title}
                </h1>
                <p className="text-[20px] text-[#8F95A5] w-96 pricing__subtitle">
                  {item.subtitle}
                </p>
                <div className="text-[30px] text-[#263238] px-[18px] bg-[#EEEEEE] rounded-md w-[240px] pricing__price">
                  £{item.price}{" "}
                  <span className="text-[18px] text-[#546269] pricing__span">
                    per month
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Pricing;
