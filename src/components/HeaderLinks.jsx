import { Link } from "react-router-dom";
import { HeaderData } from "../data/HeaderData";

function HeaderLinks() {
  return (
    <ul className="flex justify-center items-center gap-14 header__ul">
      {HeaderData.map((item) => {
        return (
          <li
            key={item.id}
            className="font-medium text-xl header__link text-[#263238] border-b-2 border-white hover:border-[#263238] pb-1.5
            transition duration-500"
          >
            <Link to={item.link}>{item.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
export default HeaderLinks;
