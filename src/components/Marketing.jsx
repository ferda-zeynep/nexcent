import photo5 from "../assets/photo5.png";
import photo6 from "../assets/photo6.png";
import photo7 from "../assets/photo7.png";

const Marketing = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[500px]">
      <div className="text-center">
        <h3 className="text-2xl sm:text-6xl lg:text-7xl text-center tracking-vide my-10">
          Caring is the new marketing
        </h3>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-8xl px-6">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="lg:col-span-3 flex justify-between mt-6">
        <div className="px-24">
          <img className="h-40 w-15 mr-2" src={photo5} alt="photo5" />
          <div className="bg-slate-50">
            <p className="py-2 text-neutral-500">
              Creating Streamlined Safeguarding Processes with OneRen
            </p>
            <span className="bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text mx-3">
              Readmore
            </span>
          </div>
        </div>
        <div>
          <img className="h-40 w-15 mr-2" src={photo6} alt="photo6" />
          <div className="bg-slate-50">
            <p className="py-2 text-neutral-500">
              What are your safeguarding responsibilities and how can you manage
              them?
            </p>
            <span className="bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text mx-3">
              Readmore
            </span>
          </div>
        </div>
        <div>
          <img className="h-40 w-15 mr-2" src={photo7} alt="photo7" />
          <div className="bg-slate-50">
            <p className="py-2 text-neutral-500">
              Revamping the Membership Model with Triathlon Australia
            </p>
            <span className="bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text mx-3">
              Readmore
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketing;
