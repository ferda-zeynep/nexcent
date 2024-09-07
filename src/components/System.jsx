import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";

const System = () => {
  return (
    <div className="relative mt-20  border-neutral-800 min-h-[500px]">
      <div className="text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-vide my-10">
          Manage your entire community in a single system
        </h2>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-8xl">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="w-full py-[5rem] px-4 ">
        <div className="max-w-[1150px] mx-auto grid md:grid-cols-3 gap-24">
          <div className="w-full shadow-xl flex flex-col p-2 my-8 rounded-lg  duration-300">
            <img className="w-20 mx-auto mt-[-3rem] " src={Icon1} alt="Icon1" />
            <h2 className="text-2xl font-bold text-center py-8">
              Membership Organisations
            </h2>

            <div className="text-center font-medium">
              <p className="py-2 text-neutral-500  mx-4">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-2 my-8 rounded-lg  duration-300">
            <img className="w-20 mx-auto mt-[-3rem] " src={Icon2} alt="Icon2" />
            <h2 className="text-2xl font-bold text-center py-8">
              National Associations
            </h2>

            <div className="text-center font-medium">
              <p className="py-2 text-neutral-500  mx-4">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
          <div className="w-full shadow-xl flex flex-col p-2 my-8 rounded-lg  duration-300">
            <img className="w-20 mx-auto mt-[-3rem] " src={Icon3} alt="Icon3" />
            <h2 className="text-2xl font-bold text-center py-8">
              Clubs And Groups
            </h2>

            <div className="text-center font-medium">
              <p className="py-2 text-neutral-500  mx-4">
                Our membership management software provides full automation of
                membership renewals and payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default System;
