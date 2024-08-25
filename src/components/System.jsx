import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";

const System = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[500px]">
      <div className="text-center">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-vide my-10">
          Manage your entire community in a single system
        </h2>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-8xl">
          Who is Nextcent suitable for?
        </p>
      </div>
      <div className="lg:col-span-3 flex justify-between mt-6">
        <div className="px-14">
          <img className="h-10 w-15 mr-2" src={Icon1} alt="Icon1" />
          <h2 className="font-bold text-neutral-900">
            Membership Organisations
          </h2>
          <p className="py-2 text-neutral-500">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div>
          <img className="h-10 w-15 mr-2" src={Icon2} alt="Icon2" />
          <h2 className="font-bold text-neutral-900">National Associations</h2>
          <p className="py-2 text-neutral-500">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
        <div>
          <img className="h-10 w-15 mr-2" src={Icon3} alt="Icon3" />
          <h2 className="font-bold text-neutral-900">Clubs And Groups</h2>
          <p className="py-2 text-neutral-500">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
};

export default System;
