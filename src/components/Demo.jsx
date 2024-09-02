import { FaArrowRight } from "react-icons/fa";

const Demo = () => {
  return (
    <div className="border-b bg-slate-50  border-neutral-800 pb-4 lg:mb-35 text-center ">
      <div className="">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl  tracking-vide my-7">
          Pellentesque suscipit
        </h1>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl  tracking-vide my-7">
          fringilla libero eu.
        </h1>
        <a
          href="#"
          className="bg-gradient-to-r from-green-500 to-green-500 py-2 px-3 rounded-md mx-3 text-neutral-100"
        >
          Get a Demo
          <FaArrowRight
            className="inline-block group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] bg-primaryDark text-neutral-200  "
            size={45}
          />
        </a>
      </div>
    </div>
  );
};

export default Demo;
