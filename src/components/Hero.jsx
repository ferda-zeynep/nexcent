import photo1 from "../assets/photo1.png";

const Hero = () => {
  return (
    <div className="border-neutral-800 pb-4 py-40 bg-slate-50">
      <div className="flex flex-wrap px-24">
        <div className="w-full lg:w-2/4">
          <div className=" font-semibold  ">
            <h1 className="text-4xl  lg:text-6xl   tracking-vide mt-16">
              Lessons and insights
            </h1>
            <div className="text-4xl  lg:text-6xl bg-gradient-to-r from-green-500 to-green-500 text-transparent bg-clip-text">
              {" "}
              from 8 years
            </div>
            <div className="mt-10 text-lg text-neutral-500   my-4">
              Where to grow your business as a photographer: site or social
              media?
            </div>
            <button className="bg-gradient-to-r from-green-500 to-green-500 py-3 px-4 rounded-md  mt-10 text-white">
              Register
            </button>
          </div>
        </div>
        <div className="w-full lg:w-2/4 lg:p-8">
          <div className="flex justify-center">
            <img src={photo1} alt="Photo1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
