import logo1 from "../../public/assets/logo1.svg";
import logo2 from "../../public/assets/logo2.svg";
import logo3 from "../../public/assets/logo3.svg";
import logo4 from "../../public/assets/logo4.svg";
import logo5 from "../../public/assets/logo5.svg";
import logo6 from "../../public/assets/logo6.svg";
import logo7 from "../../public/assets/logo7.svg";

const Clients = () => {
  return (
    <div className="border-neutral-800 pb-24">
      <h1 className="mt-10 text-center text-4xl">Our Clients</h1>
      <p className="mt-2 text-lg text-center text-neutral-500 max-w-8xl">
        We have been working with some Fortune 500+ clients
      </p>

      <div className="flex justify-between md:w-[85%] my-9 mx-14">
        <img src={logo1} alt="logo1" />
        <img src={logo2} alt="logo2" />
        <img src={logo3} alt="logo3" />
        <img src={logo4} alt="logo4" />
        <img src={logo5} alt="logo5" />
        <img src={logo6} alt="logo6" />
        <img src={logo7} alt="logo7" />
      </div>
    </div>
  );
};

export default Clients;
