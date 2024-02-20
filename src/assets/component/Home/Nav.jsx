import { useState } from "react";
import logo from "../../img/nav/abdullagpnglogo (convert.io).webp";
import hambar from "../../img/nav/png-clipart-hamburger-button-fast-food-cheeseburger-navigation-bar-menu-angle-food.png";
import cross from "../../img/nav/75519.png";
import { Link } from "react-router-dom";

export const Nav = () => {
  const [nav, setnav] = useState(false);
  return (
    <>
      <div className="  flex sm:grid sm:grid-cols-2 justify-between shadow-xl m-auto p-3 ">
        <div className="xl:mx-[30%]">
          <Link to={"/home"}>
            <img src={logo} alt="" />
          </Link>
        </div>

        <div className="sm:flex hidden">
          <Link
            to={"/About"}
            className="ml-[15%] text-xl font-bold pt-[5%]  hover:text-blue-700 hover:underline "
          >
            <span className="ml-[25%] text-xl font-bold pt-[5%]  hover:text-blue-700 hover:underline ">
              About
            </span>
          </Link>

          <Link to={"/Contact"} className="ml-[15%] text-xl font-bold pt-[5%]  hover:text-blue-700 hover:underline ">
            <span className="ml-[15%] text-xl font-bold pt-[5%]  hover:text-blue-700 hover:underline">
              Contact
            </span>
          </Link>

          <Link to={"/Work"} className="ml-[15%] text-xl font-bold pt-[5%]  hover:text-blue-700 hover:underline ">
            <span className="ml-[15%] text-xl font-bold pt-[5%]  hover:text-blue-700 hover:underline">
              Work
            </span>
          </Link>
        </div>
        {nav ? (
          <div className="sm:hidden">
            <img
              src={cross}
              alt=""
              className="w-8 mt-[70%] cursor-pointer"
              onClick={() => setnav(!nav)}
            />
          </div>
        ) : (
          <div className="sm:hidden">
            <img
              src={hambar}
              alt=""
              className="w-10 mt-[70%] cursor-pointer"
              onClick={() => setnav(!nav)}
            />
          </div>
        )}
      </div>

      <div className="   sm:hidden inline-block">
        {nav ? (
          <div className="sm:hidden ml-[140%] ms:ml-[180%] text-center inline-block">
           <Link to={"/About"}>

        
            <h1 className=" py-[7%]  text-2xl font-bold pt-[5%]    hover:text-blue-700 hover:underline ">
              About
            </h1>
            </Link>
            <Link to={"/Contact"}>

            <h1 className="  py-[7%] text-2xl font-bold pt-[5%]  hover:text-blue-700 hover:underline">
              Contact
            </h1>
            </Link>
            <Link to={"/Work"}>

            <h1 className="  py-[7%]  text-2xl font-bold pt-[5%]  hover:text-blue-700 hover:underline">
              Work
            </h1>
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
};
