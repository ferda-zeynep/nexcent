const Member = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
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
      </div>
    </div>
  );
};

export default Member;
