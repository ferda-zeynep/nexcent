import { FaArrowRight } from "react-icons/fa";

export const MarketingCardComponent = ({ imgSrc, description }) => {
  return (
    <div className="relative">
      <img className="h-64 w-86 mr-2" src={imgSrc} alt="card" />
      <div className="bg-slate-50 w-64 absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-center">
        <p className="py-2 text-neutral-500">{description}</p>
        <span className="bg-gradient-to-r text-green-600 bg-clip-text mx-3">
          Readmore
          <FaArrowRight
            className="inline-block group-hover:!translate-x-2 duration-200 p-2 text-base h-[40px] bg-primaryDark text-green-600"
            size={30}
          />
        </span>
      </div>
    </div>
  );
};
