import photo5 from "../assets/photo5.png";
import photo6 from "../assets/photo6.png";
import photo7 from "../assets/photo7.png";
import { FaArrowRight } from "react-icons/fa";
import { MarketingCardComponent } from "./MarketingCard";

const Marketing = () => {
  const cardData = [
    {
      imgSrc: photo5,
      description: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      imgSrc: photo6,
      description: "Creating Streamlined Safeguarding Processes with OneRen",
    },
    {
      imgSrc: photo7,
      description: "Creating Streamlined Safeguarding Processes with OneRen",
    },
  ];
  return (
    <div className="relative mt-16  border-neutral-800 min-h-[500px]">
      <div className="text-center">
        <h3 className="text-2xl sm:text-6xl lg:text-7xl text-center tracking-vide my-10">
          Caring is the new marketing
        </h3>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-8xl px-80">
          The Nexcent blog is the best place to read about the latest membership
          insights, trends and more. See who's joining the community, read about
          how our community are increasing their membership income and lot's
          more.​
        </p>
      </div>
      <div className="flex justify-center gap-11 mt-4 space-x-8 px-36">
        {cardData.map((card, index) => (
          <MarketingCardComponent
            key={index}
            imgSrc={card.imgSrc}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Marketing;
