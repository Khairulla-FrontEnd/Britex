import heroImg from "../assets/Learning languages-bro 1.png";
import pattern from "../assets/pattern.png";

function Hero() {
    return <div id="home" className="flex flex-row-reverse justify-between items-center hero">
        <div className="w-[661px] h-[661px] hero__img">
            <img src={heroImg} alt="hero__img" className="w-full h-full object-cover"></img>
        </div>
        <div className="relative hero__texts">
            <h1 className="font-semibold text-6xl leading-[80px] hero__title">Learn<br></br>Any Foreign<br></br>Language</h1>
            <p className="text-[#8F95A5] text-2xl leading-9 mt-10 mb-16 hero__subtitle">
                With our teachers who write a program for <br></br>
each student, you will be able to make your <br></br>
first sketch after the first lesson.
            </p>
            <button className="py-8 px-28 bg-[#263238] text-white text-4xl rounded-2xl border-2 border-[#263238]
        hover:text-black hover:bg-white transition duration-500 hero__button">
                Get started
            </button>
            <div className="w-[85px] h-[85px] absolute top-24 left-96 pattern">
                <img src={pattern} alt="pattern" className="w-full h-full object-cover"></img>
            </div>
        </div>
    </div>
}
export default Hero;