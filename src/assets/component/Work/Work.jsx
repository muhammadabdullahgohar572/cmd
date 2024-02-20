import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
import wise from "../../img/Porfoilo/Wise-Market (convert.io).webp";
import or from "../../img/Porfoilo/Vite-React (convert.io).webp";
import baking from "../../img/Porfoilo/Vite-React (convert.io) (1).webp";
import { Link } from "react-router-dom";

import Crad1 from "../../img/img/abdullahc1.webp";
import Crad2 from "../../img/img/abdullahc2.webp";

import Down from "../../component/Work/Untitled-2 (convert.io).webp";

import NO1 from "../../img/img/abdullahmove5.webp";
import NO2 from "../../img/img/ABDULLAHPOST.webp";
import NO3 from "../../img/img/Busghar.webp";
import NO4 from "../../img/img/CARDS1.webp";
import NO5 from "../../img/img/Crads.webp";
import NO6 from "../../img/img/Glass.webp";
import NO7 from "../../img/img/lauout3.webp";
import NO8 from "../../img/img/lauout4.webp";

import NO9 from "../../img/img/layout1.webp";

import NO10 from "../../img/img/layout5.webp";

import NO11 from "../../img/img/love.webp";
import NO12 from "../../img/img/movie project.webp";

import NO13 from "../../img/img/pakistan.webp";
import NO14 from "../../img/img/Time.webp";
import NO15 from "../../img/img/QURAN.webp";
import NO16 from "../../img/img/post.jpg";

export const Work = () => {
  useEffect(() => {
    AOS.init({
      duration: "3000",
    });
  }, []);
  const [Developer, SetDeveloper] = useState({});
  return (
    <>
      <div className=" text-center text-4xl mt-[10%] font-bold ">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hi ")
              .pauseFor(1000)
              .deleteAll()
              .typeString(
                '  This My   <span class="text-[#ff4343]"> Portfolio </span>'
              )
              .pauseFor(1000)
              .deleteAll()
              .typeString("Visit Now")
              .start();
          }}
        />
      </div>

      <div className="text-center sm:grid sm:grid-cols-2 mt-[10%]">
        <div>
          <button
            onClick={() => SetDeveloper("close")}
            className={`text-xl font-bold bg-[#FFB400] text-white p-3 ${
              Developer === "close" ? "bg-blue-600" : ""
            }`}
          >
            Web Development Work
          </button>
        </div>
        <div>
          <button
            onClick={() => SetDeveloper("open")}
            className={` sm:mt-0 mt-[10%] text-xl font-bold bg-[#FFB400] text-white p-3 ${
              Developer === "open" ? "bg-blue-600" : ""
            }`}
          >
            Graphic Design Work
          </button>
        </div>
      </div>

      {/* web Delevepemnt  */}

      {Developer === "close" ? (
        <div className="mb-[30%]">
          <div
            className="sm:grid sm:grid-cols-2 align-middle ml-[15%]   mt-[10%] justify-around text-center"
            data-aos="fade-up"
          >
            <div className="bg-white cursor-pointer  align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[100%]  sm:p-[5%] sm:py-[20%] p-2 py-7  w-[250px]">
              <img
                src={wise}
                alt="web img"
                className="w-[100%]    h-[80%] text-center "
              />
              <div className="sm:mt-[5%] text-left mt-[5%]">
                <span className="sm:text-xl    sm:mt-[5%] font-bold">
                  WiseMarket
                </span>
              </div>

              <div className="text-left">
                <Link
                  to="https://mabdullahm5.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="cursor-pointer mt-[5%]   text-lg sm:p-[5%] p-[2%] font-bold bg-[#FFB400] rounded-xl text-white">
                    Visit Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="sm:grid sm:grid-cols-0  ml-[15%] mt-[10%] justify-end  "
            data-aos="fade-up"
          >
            <div className="bg-white cursor-pointer  align-middle   sm:mt-0 mt-[10%] shadow-2xl  sm:w-[80%]  sm:p-[7%] sm:pt-[4%] sm:pb-[5%] p-2 py-7  w-[250px]">
              <img
                src={or}
                alt="web img"
                className="w-[100%]    h-[80%] text-center "
              />
              <div className="sm:mt-[5%] sm:text-left mt-[5%]">
                <span className="sm:text-xl    sm:mt-[5%] font-bold">
                  Business Web
                </span>
              </div>

              <div className="sm:text-left">
                <Link
                  to="https://mabdullahm2.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="cursor-pointer mt-[2%]   text-lg sm:p-[4%] p-[2%] font-bold bg-[#FFB400] rounded-xl text-white">
                    Visit Now
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="sm:grid sm:grid-cols-2 align-middle ml-[15%]   mt-[10%] justify-around text-center"
            data-aos="fade-up"
          >
            <div className="bg-white cursor-pointer  align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[100%]  sm:p-[5%] sm:py-[20%] p-2 py-7  w-[250px]">
              <img
                src={baking}
                alt="web img"
                className="w-[100%]    h-[80%] text-center "
              />
              <div className="sm:mt-[5%] text-left mt-[5%]">
                <span className="sm:text-xl    sm:mt-[5%] font-bold">
                  Banking Web
                </span>
              </div>

              <div className="text-left">
                <Link
                  to="https://mabdullahm3.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="cursor-pointer mt-[5%]   text-lg sm:p-[5%] p-[2%] font-bold bg-[#FFB400] rounded-xl text-white">
                    Visit Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : Developer === "open" ? (
        <div>
          <div className="bg-white text-center p-[10%]  shadow-2xl sm:p-[10%]">
            <h1 className="text-3xl font-extrabold p-[4%]  font-serif 'Anton', sans-serif;">
              My Business Cards
            </h1>
            <div className="  sm:grid  sm:grid-cols-2 cursor-pointer align-middle sm:mt-0 mt-[10%]  text-center sm:w-[85%] sm:p-0 p-2 py-7  w-[250px]">
              <div className="text-center">
                <img
                  src={Crad1}
                  alt="web img"
                  className="w-[100%]  text-center ml-[10%]"
                />
              </div>
              <div className="mt-[5%] sm:mt-0">
                <img
                  src={Crad2}
                  alt="web img"
                  className="w-[100%] border-4 border-[#D3D5D5]  text-center ml-[10%]"
                />
              </div>
            </div>
            <button
              onClick={() => SetDeveloper("Graphic Work")}
              className={`sm:mr-4 text-xl  text-center font-bold bg-[#FFB400] text-white mt-[10%px] p-[2%]  sm:mt-[10%] sm:p-[2%] rounded-lg mr-[5%] ${
                Developer === "Graphic Work" ? "bg-blue-600" : ""
              }`}
            >
              Visit Now My Graphic Work
            </button>
          </div>
        </div>
      ) : Developer === "Graphic Work" ? (
        <>
          <img
            src={Down}
            alt="web img"
            className="w-[50%]  text-center ml-[20%] mt-[10%]"
          />

          <div
            className="bg-white cursor-pointer sm:grid sm:grid-cols-2 align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[100%] sm:p-10 p-2 py-7   "
            data-aos="fade-up"
          >
            <div>
              <div className="my-[5%]">
                <span className="text-2xl font-semibold">Movie Poster</span>
              </div>
              <img
                src={NO1}
                alt="web img"
                className="w-[70%] font-bold   text-center ml-[15%]"
              />
            </div>

            <div>
              <div className="my-[5%]">
                <span className="sm:text-xl font-bold text-2xl">
                  Movie Poster
                </span>
              </div>
              <img
                src={NO2}
                alt="web img"
                className="w-[70%]    text-center ml-[15%]"
              />
            </div>
          </div>

          <div
            className="bg-white cursor-pointer sm:grid sm:grid-cols-2 align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[100%] sm:p-10 p-2 py-7   "
            data-aos="fade-up"
          >
            <div>
              <div className="my-[5%]">
                <span className="text-2xl font-semibold">Fast Food</span>
              </div>
              <img
                src={NO3}
                alt="web img"
                className="w-[70%] font-bold   text-center ml-[15%]"
              />
            </div>

            <div>
              <div className="my-[5%]">
                <span className="sm:text-xl font-bold text-2xl">
                  Glasses Desgin
                </span>
              </div>
              <img
                src={NO6}
                alt="web img"
                className="w-[70%]    text-center ml-[15%]"
              />
            </div>
          </div>

          <div
            className="bg-white cursor-pointer sm:grid sm:grid-cols-2 align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[100%] sm:p-10 p-2 py-7   "
            data-aos="fade-up"
          >
            <div>
              <div className="my-[5%]">
                <span className="sm:text-xl font-bold text-2xl">
                  Client Business Design
                </span>
              </div>
              <img
                src={NO4}
                alt="web img"
                className="w-[70%] font-bold   text-center ml-[15%]"
              />
            </div>

            <div>
              <div className="my-[5%]">
                <span className="sm:text-xl font-bold text-2xl">
                  Client Business Design
                </span>
              </div>
              <img
                src={NO5}
                alt="web img"
                className="w-[70%]    text-center ml-[15%]"
              />
            </div>
          </div>

          <div
            className="bg-white cursor-pointer sm:grid sm:grid-cols-2 align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[100%] sm:p-10 p-2 py-7   "
            data-aos="fade-up"
          >
            <div>
              <div className="my-[5%]">
                <span className="text-2xl font-semibold">Layout Design</span>
              </div>
              <img
                src={NO7}
                alt="web img"
                className="w-[70%] font-bold   text-center ml-[15%]"
              />
            </div>

            <div>
              <div className="my-[5%]">
                <span className="sm:text-xl font-bold text-2xl">
                  Layout Design{" "}
                </span>
              </div>
              <img
                src={NO8}
                alt="web img"
                className="w-[70%]    text-center ml-[15%]"
              />
            </div>
          </div>

          <div
            className="bg-white cursor-pointer sm:grid sm:grid-cols-2 align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[100%] sm:p-10 p-2 py-7   "
            data-aos="fade-up"
          >
            <div>
              <div className="my-[5%]">
                <span className="text-2xl font-semibold">Layout Design</span>
              </div>
              <img
                src={NO9}
                alt="web img"
                className="w-[70%] font-bold   text-center ml-[15%]"
              />
            </div>

            <div>
              <div className="my-[5%]">
                <span className="sm:text-xl font-bold text-2xl">
                  Layout Design{" "}
                </span>
              </div>
              <img
                src={NO10}
                alt="web img"
                className="w-[70%]    text-center ml-[15%]"
              />
            </div>
          </div>

          <div
            className="bg-white cursor-pointer sm:grid sm:grid-cols-2 align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[100%] sm:p-10 p-2 py-7   "
            data-aos="fade-up"
          >
            <div>
              <div className="my-[5%]">
                <span className="text-2xl font-semibold">Movie Poster</span>
              </div>
              <img
                src={NO11}
                alt="web img"
                className="w-[70%] font-bold   text-center ml-[15%]"
              />
            </div>

            <div>
              <div className="my-[5%]">
                <span className="sm:text-xl font-bold text-2xl">
                  Movie Poster{" "}
                </span>
              </div>
              <img
                src={NO12}
                alt="web img"
                className="w-[70%]    text-center ml-[15%]"
              />
            </div>
          </div>

          <div
            className="bg-white cursor-pointer sm:grid sm:grid-cols-2 align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[100%] sm:p-10 p-2 py-7   "
            data-aos="fade-up"
          >
            <div>
              <div className="my-[5%]">
                <span className="text-2xl font-semibold">Movie Poster</span>
              </div>
              <img
                src={NO13}
                alt="web img"
                className="w-[70%] font-bold   text-center ml-[15%]"
              />
            </div>

            <div>
              <div className="my-[5%]">
                <span className="sm:text-xl font-bold text-2xl">Post </span>
              </div>
              <img
                src={NO14}
                alt="web img"
                className="w-[70%]    text-center ml-[15%]"
              />
            </div>
          </div>

          <div
            className="bg-white cursor-pointer sm:grid sm:grid-cols-2 align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[100%] sm:p-10 p-2 py-7   "
            data-aos="fade-up"
          >
            <div>
              <div className="my-[5%]">
                <span className="text-2xl font-semibold">Magazine Cover</span>
              </div>
              <img
                src={NO16}
                alt="web img"
                className="w-[70%] font-bold   text-center ml-[15%]"
              />
            </div>

            <div>
              <div className="my-[5%]">
                <span className="sm:text-xl font-bold text-2xl">Post </span>
              </div>
              <img
                src={NO15}
                alt="web img"
                className="w-[70%]    text-center ml-[15%]"
              />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
