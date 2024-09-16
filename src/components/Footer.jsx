import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mx-auto py-16  grid lg:grid-cols-3 gap-8   bg-black text-neutral-100 px-20">
      <div>
        <div className="flex items-center flex-shrink-0 py-5">
          <img className="h-10 w-15 mr-2" src="/assets/Logo8.svg" alt="logo" />
        </div>
        <p>Copyright © 2020 Nexcent ltd.</p>
        <p className="py-4 ">All rights reserved</p>
        <div className="flex justify-between md:w-[45%] my-5">
          <FaLinkedin size={30} />
          <FaGithub size={30} />
          <FaSquareXTwitter size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-around mt-6">
        <div>
          <h6 className="font-medium text-gray-100">Company</h6>
          <ul className="text-gray-300 mt-4">
            <li className="py-2 text-sm">About us</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Contact us</li>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Testimonials</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-100">Support</h6>
          <ul className="text-gray-300 mt-4">
            <li className="py-2 text-sm">Help center</li>
            <li className="py-2 text-sm">Terms of service</li>
            <li className="py-2 text-sm">Legal</li>
            <li className="py-2 text-sm">Privacy policy</li>
            <li className="py-2 text-sm">Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-100">Stay up to date</h6>
          <div className="relative">
            <input
              className="bg-slate-700 p-3 flex w-full rounded-md  text-neutral-500 mt-4 "
              type="email"
              placeholder="Your email address"
            />
            <div
              class="absolute inset-y-0 right-0 pl-3  
                    flex items-center  
                    pointer-events-none"
            >
              <img
                className="h-5 w-5 mr-2"
                src="public/assets/send.svg"
                alt="send"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
