import { skillsData } from "../data/SkillsData.js";

function Skills() {
  return (
    <div id="skills" className="mb-32 skills__main">
      <h1 className="my-24 text-5xl font-semibold text-center skills__title">
        Skills
      </h1>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-3 grid-rows-1 gap-x-[18px] gap-y-5 skills__cards">
          {skillsData.map((item) => {
            if (item.id === 0) {
              return (
                <div
                  key={item.id}
                  className={
                    "bg-[#F5F5F5] rounded-xl flex justify-center flex-col gap-5 row-span-2 " +
                    `skills__card${item.id}`
                  }
                >
                  <div
                    className={item.imgSize + ` skills__card__img${item.id}`}
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    ></img>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold text-[#263238] mb-5 skills__card__title">
                      {item.title}
                    </h1>
                    <p className="leading-6 text-[#8F95A5] mb-8 skills__card__subtitle">
                      {item.subtitle}
                    </p>
                    <p className="leading-6 text-[#8F95A5] mb-10 skills__card__subtitle2">
                      {item.subtitle2}
                    </p>
                    <button
                      className="py-3.5 px-12 text-2xl text-white font-medium bg-[#263238] rounded-md border-2 border-[#263238]
                        hover:text-black hover:bg-white transition duration-500 skills__card__btn"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              );
            } else if (item.id === skillsData.length - 1) {
              return (
                <div
                  key={item.id}
                  className={
                    "bg-[#F5F5F5] rounded-xl flex justify-between flex-row-reverse col-start-2 col-end-4 " +
                    `skills__card${item.id}`
                  }
                >
                  <div
                    className={item.imgSize + ` skills__card__img${item.id}`}
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    ></img>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold text-[#263238] mb-5 skills__card__title">
                      {item.title}
                    </h1>
                    <p className="leading-6 text-[#8F95A5] w-80 mb-10 skills__card__subtitle">
                      {item.subtitle}
                    </p>
                    <button
                      className="py-3.5 px-12 text-2xl text-white font-medium bg-[#263238] rounded-md border-2 border-[#263238]
                        hover:text-black hover:bg-white transition duration-500 skills__card__btn"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              );
            } else {
              return (
                <div
                  key={item.id}
                  className={
                    "bg-[#F5F5F5] rounded-xl " + `skills__card${item.id}`
                  }
                >
                  <div
                    className={
                      item.imgSize +
                      " mb-5 skills__card__img " +
                      `skills__card__img${item.id}`
                    }
                  >
                    <img
                      src={item.imgSrc}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    ></img>
                  </div>
                  <div>
                    <h1 className="text-3xl font-semibold text-[#263238] skills__card__title">
                      {item.title}
                    </h1>
                    <p className="leading-6 text-[#8F95A5] my-5 skills__card__subtitle">
                      {item.subtitle}
                    </p>
                    <button
                      className="py-3.5 px-12 text-2xl text-white font-medium bg-[#263238] rounded-md border-2 border-[#263238]
                        hover:text-black hover:bg-white transition duration-500 skills__card__btn"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
export default Skills;
