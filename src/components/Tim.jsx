import photo4 from "../../public/assets/photo4.png";
import logo1 from "../../public/assets/logo1.svg";
import logo2 from "../../public/assets/logo2.svg";
import logo3 from "../../public/assets/logo3.svg";
import logo4 from "../../public/assets/logo4.svg";
import logo5 from "../../public/assets/logo5.svg";
import logo6 from "../../public/assets/logo6.svg";
import logo7 from "../../public/assets/logo7.svg";
import { FaArrowRight } from "react-icons/fa";

const Tim = () => {
  return (
    <div className=" bg-slate-50  border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={photo4} alt="Photo4" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mx-3">
            <p className="mt-10 text-lg text-ellipsis text-neutral-500 max-w-4xl mx-3 my-4">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <span className="bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text mx-3">
              Tim Smith
            </span>
            <p className="mt-10 text-lg text-ellipsis text-neutral-500 max-w-4xl mx-3 my-4">
              British Dragon Boat Racing Association
            </p>
            <div className="flex justify-between md:w-[85%] my-9 mx-14">
              <img src={logo1} alt="logo1" />
              <img src={logo2} alt="logo2" />
              <img src={logo3} alt="logo3" />
              <img src={logo4} alt="logo4" />
              <img src={logo5} alt="logo5" />
              <img src={logo6} alt="logo6" />
              <img src={logo7} alt="logo7" />
              <span className="bg-gradient-to-r text-green-600 bg-clip-text mx-3">
                Meet all customers
                <FaArrowRight
                  className="inline-block group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] bg-primaryDark text-green-600   "
                  size={30}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tim;
