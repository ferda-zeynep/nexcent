import photo2 from "../assets/photo2.png";

const Pixelgrades = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={photo2} alt="Photo2" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mx-3">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-ellipsis tracking-vide my-10">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="mt-10 text-lg text-ellipsis text-neutral-500 max-w-4xl mx-3 my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <a
              href="#"
              className="bg-gradient-to-r from-green-500 to-green-500 py-2 px-3 rounded-md mx-3"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pixelgrades;
