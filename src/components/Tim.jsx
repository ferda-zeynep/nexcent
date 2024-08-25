import photo4 from "../assets/photo4.png";

const Tim = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={photo4} alt="Photo4" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start mx-3">
            <p className="mt-10 text-lg text-ellipsis text-neutral-500 max-w-4xl mx-3 my-4">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <span className="bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text mx-3">
              Tim Smith
            </span>
            <p className="mt-10 text-lg text-ellipsis text-neutral-500 max-w-4xl mx-3 my-4">
              British Dragon Boat Racing Association
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tim;
