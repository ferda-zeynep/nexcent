import photo1 from "../assets/photo1.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35 bg-slate-50">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mx-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-vide my-10">
              Lessons and insights
              <span className="bg-gradient-to-r from-green-500 to-green-500 text-transparent bg-clip-text">
                {" "}
                from 8 years
              </span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl mx-3 my-4">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <a
              href="#"
              className="bg-gradient-to-r from-green-500 to-green-500 py-2 px-3 rounded-md mx-3"
            >
              Register
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={photo1} alt="Photo1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
