import WEB from "../../img/Hero/coding (convert.io).webp";
import ui from "../../img/Hero/game-development (convert.io).webp";
import photo from "../../img/Hero/Photographer (convert.io).webp";
import grahic  from "../../img/Hero/illustration (convert.io).webp"

export const Hero = () => {
  return (
    <>
      <div className="text-center align-middle mt-[10%]">
        <h1 className="text-3xl font-extrabold   font-serif 'Anton', sans-serif; ">
          My Services
        </h1>
        <div className="sm:mt-[5%] mt-[4%] font-medium">
          <span className="sm:text-xl  font-medium">
            "Building a MERN stack service tailored
            <br /> for Dleoveper's requirements."
          </span>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-2 align-middle ml-[15%]  mt-[10%] justify-around text-center">
        <div className="bg-white cursor-pointer align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[70%] sm:p-10 p-2 py-7  w-[250px]">
          <img
            src={WEB}
            alt="web img"
            className="w-[40%]  text-center ml-[30%]"
          />
          <div className="mt-[5%]">
            <span className="sm:text-xl font-semibold">
              "Efficient MERN stack web development for robust and scalable
              applications. Leveraging MongoDB, Express.js, React, and Node.js
              for a full-stack solution."
            </span>
          </div>
        </div>

        <div className="bg-white cursor-pointer align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[70%] sm:p-10 p-2 py-7  w-[250px]">
          <img
            src={ui}
            alt="web img"
            className="w-[40%]  text-center ml-[30%]"
          />
          <div className="mt-[5%]">
            <span className="sm:text-xl font-semibold">
              "Creating captivating UI/UX designs that enhance user experiences.
              Utilizing design thinking for visually appealing and user-friendly
              interfaces."
            </span>
          </div>
        </div>
      </div>

      <div className="sm:grid sm:grid-cols-2 align-middle ml-[15%]  mt-[10%] justify-around text-center">
        <div className="bg-white cursor-pointer align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[70%] sm:p-10 p-2 py-7  w-[250px]">
          <img
            src={photo}
            alt="web img"
            className="w-[40%]  text-center ml-[30%]"
          />
          <div className="mt-[5%]">
            <span className="sm:text-xl font-semibold">
              "Capturing timeless moments with expert photography services.
              Offering professional and creative photography to tell your unique
              story."
            </span>
          </div>
        </div>

        <div className="bg-white  cursor-pointer align-middle sm:mt-0 mt-[10%] shadow-2xl text-center sm:w-[70%] sm:p-10 p-2 py-7  w-[250px]">
          <img
            src={grahic}
            alt="web img"
            className="w-[40%]  text-center ml-[30%]"
          />
          <div className="mt-[5%]">
            <span className="sm:text-xl font-semibold">
              "Providing innovative graphic design solutions to elevate your
              brand visuals. Transforming ideas into compelling visuals with
              creativity and expertise."
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
