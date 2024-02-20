import ABdullah from "../../img/About/WhatsApp Image 2024-02-13 at 00.43.09_28d3e71f (convert.io).webp";
export const About = () => {
  return (
    <>
      {/* bg-[#ffe097] */}

      <div className="  w-full mt-[10%] container mx-auto ">
        <div className="sm:grid sm:grid-cols-2  text-center  sm:text-left justify-around container mx-auto  sm:px-[5%]">
          <div>
            <img
              src={ABdullah}
              alt=""
              className="w-[40%] container mx-auto sm:mx-0    "
            />
            <br />
            <span className="text-xl font-semibold sm:mt-[5%]">
              Muhammad Abdullah Gohar
            </span>
            <br />
            <span className="text-xl font-semibold sm:mt-[3%]">
              Full-StackDeveloper and{" "}
            </span>
            <br />

            <span className="text-xl font-semibold">Graphic Designer</span>
          </div>

          <div className="sm:mt-0 mt-[10%] ">
            <span className="sm:text-xl  sm:p-0 p-[10%] sm:text-right text-center sm:mt-0 mt-[10%]  ">
              Meet the dynamic duo in the world of digital creativity - the MERN
              Stack Developer and Graphic Designer. The MERN Stack Developer,
              proficient in MongoDB, Express.js, React.js, and Node.js, brings
              the backbone of web development. On the other side, the Graphic
              Designer, with an artistic flair and mastery in visual
              communication, adds the aesthetic touch to user interfaces.
              Together, they form an unstoppable team, seamlessly blending
              technology and design to create immersive and visually stunning
              digital experiences. Get ready to witness innovation and
              creativity converge as this dynamic duo transforms ideas into
              captivating realities.
            </span>
          </div>
        </div>

        <div className="text-center  mt-[10%]">
          <div>
            <h1 className="text-3xl font-extrabold   font-serif 'Anton', sans-serif;">
              Education
            </h1>
            <h1 className="text-xl mt-[3%] font-bold mb-4">
              Software Engineering Education Paths
            </h1>
          </div>

          <div className="bg-white sm:shadow-2xl p-2  sm:grid sm:grid-cols-2 sm:container mt-[10%] sm:mx-auto">
            <div className=" sm:p-8 rounded  max-w-md ">
              <div className="">
                <div className="mb-6 text-left">
                  <h2 className="text-lg font-bold  mb-2">
                    Diploma/Certification Courses
                  </h2>
                  <p className=" sm:inline-block text-gray-600">
                    Consider enrolling in diploma or certification courses
                    related to software engineering. These programs often
                    provide hands-on training and can be completed in a shorter
                    duration than traditional degrees.
                  </p>
                </div>
              </div>
            </div>
            <div className="mb-6 text-left  sm:p-8">
              <h2 className="text-lg font-bold mb-2">Associates Degree</h2>
              <p className="text-gray-600">
                Pursuing an associates degree in a relevant field like Computer
                Science or Software Engineering can provide you with a solid
                foundation in programming and software development.
              </p>
            </div>
          </div>

          <div className="bg-white  px-[4%]  sm:grid sm:grid-cols-2 container  mx-auto">
            <div className="sm:grid sm:grid-cols-2">
              <div className="mb-6  text-left">
                <h2 className="text-lg font-bold mb-2">
                  Online Courses and Bootcamps
                </h2>
                <p className="text-gray-600">
                  Explore online platforms like Coursera, Udacity, and
                  Codecademy for flexible and accessible courses and bootcamps
                  in software engineering.
                </p>
              </div>
            </div>
            <div className="mb-6 text-left">
              <h2 className="text-lg font-bold ">Self-Study</h2>
              <p className="text-gray-600">
                Utilize online resources, books, and tutorials to learn
                programming languages such as Python, JavaScript, or Java. Build
                a portfolio of projects to showcase your skills.
              </p>
            </div>
          </div>

          <div className=" px-[4%]  sm:grid sm:grid-cols-2 container  mx-auto">
            <div className="sm:grid sm:grid-cols-2">
              <div className="">
                <div className="mb-6 text-left">
                  <h2 className="text-lg font-bold mb-2">
                    Networking and Meetups
                  </h2>
                  <p className="text-gray-600">
                    Attend local meetups, workshops, and networking events to
                    connect with professionals in the software engineering
                    field. Networking can open up opportunities for mentorship
                    and potential job leads.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-lg text-left font-bold mb-2">
                Explore Open Source Projects
              </h2>
              <p className="text-gray-600 text-left">
                Contribute to open-source projects on platforms like Netlify.
                This not only enhances your coding skills but also provides
                real-world experience and visibility in the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
