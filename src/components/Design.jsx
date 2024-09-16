const Design = () => {
  return (
    <div className=" border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src="public/assets/photo3.png" alt="Photo3" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mx-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-ellipsis tracking-vide my-4">
              How to design your site footer like we did
            </h1>
            <p className="mt-10 text-lg text-ellipsis text-neutral-500 max-w-4xl mx-3 my-4">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <a
              href="#"
              className="bg-gradient-to-r from-green-500 to-green-500 text-white py-2 px-3 rounded-md mx-3"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
