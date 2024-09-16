import { FaArrowRight } from "react-icons/fa";

const Tim = () => {
  return (
    <div className=" bg-slate-50  border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src="/assets/photo4.png" alt="Photo4" />
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
              <img src="/assets/Logo1.svg" alt="logo1" />
              <img src="/assets/Logo2.svg" alt="logo2" />
              <img src="/assets/Logo3.svg" alt="logo3" />
              <img src="/assets/Logo4.svg" alt="logo4" />
              <img src="/assets/Logo5.svg" alt="logo5" />
              <img src="/assets/Logo6.svg" alt="logo6" />
              <img src="/assets/Logo7.svg" alt="logo7" />
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
