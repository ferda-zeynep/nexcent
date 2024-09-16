const Clients = () => {
  return (
    <div className="border-neutral-800 pb-24">
      <h1 className="mt-10 text-center text-4xl">Our Clients</h1>
      <p className="mt-2 text-lg text-center text-neutral-500 max-w-8xl">
        We have been working with some Fortune 500+ clients
      </p>

      <div className="flex justify-between md:w-[85%] my-9 mx-14">
        <img src="/assets/Logo1.svg" alt="logo1" />
        <img src="/assets/Logo2.svg" alt="logo2" />
        <img src="/assets/Logo3.svg" alt="logo3" />
        <img src="/assets/Logo4.svg" alt="logo4" />
        <img src="/assets/Logo5.svg" alt="logo5" />
        <img src="/assets/Logo6.svg" alt="logo6" />
        <img src="/assets/Logo7.svg" alt="logo7" />
      </div>
    </div>
  );
};

export default Clients;
