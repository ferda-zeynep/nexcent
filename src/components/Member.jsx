const Member = () => {
  return (
    <div className=" border-neutral-800 pb-4 lg:mb-35 bg-slate-50">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mx-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-ellipsis tracking-vide my-10">
              Helping a local
              <span className="bg-gradient-to-r from-green-500 to-green-500 text-transparent bg-clip-text">
                {" "}
                business reinvent itself
              </span>
            </h1>
            <p className="mt-10 text-lg text-ellipsistext-neutral-500 max-w-4xl mx-3 my-6">
              We reached here with our hand work and dedication
            </p>
          </div>
        </div>
        <div className="w-full justify-around lg:w-1/2">
          <div className="grid grid-cols-2  gap-4  ">
            <div className="flex items-center">
              <img src="/assets/Icon4.svg" alt="Icon4" />
              <div className="flex flex-col">
                <h1 className="text-2xl sm:text-6xl lg:text-4xl text-ellipsis font-bold tracking-vide mx-6 my-2">
                  2,245,341
                </h1>
                <p className=" text-ellipsis text-neutral-500 max-w-4xl mx-6 my-2 ">
                  Members
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/assets/Icon5.svg" alt="Icon5" />
              <div className="flex flex-col">
                <h1 className="text-2xl sm:text-6xl lg:text-4xl text-ellipsis font-bold tracking-vide mx-6 my-2">
                  46,328
                </h1>
                <p className=" text-ellipsis text-neutral-500 max-w-4xl mx-6 my-2 ">
                  Clubs
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/assets/Icon6.svg" alt="Icon6" />
              <div className="flex flex-col">
                <h1 className="text-2xl sm:text-6xl lg:text-4xl text-ellipsis font-bold tracking-vide mx-6 my-2">
                  828,867
                </h1>
                <p className=" text-ellipsis text-neutral-500 max-w-4xl mx-6 my-2 ">
                  Event Bookings
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <img src="/assets/Icon7.svg" alt="Icon7" />
              <div className="flex flex-col">
                <h1 className="text-2xl sm:text-6xl lg:text-4xl text-ellipsis font-bold tracking-vide mx-6 my-2">
                  1,926,436
                </h1>
                <p className=" text-ellipsis text-neutral-500 max-w-4xl mx-6 my-2 ">
                  Payments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
