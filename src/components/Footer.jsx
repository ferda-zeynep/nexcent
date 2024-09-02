import logo from "../assets/logo8.svg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" mx-auto py-16  grid lg:grid-cols-3 gap-8   bg-black text-neutral-100 px-20">
      <div>
        <div className="flex items-center flex-shrink-0 py-5">
          <img className="h-10 w-15 mr-2" src={logo} alt="logo" />
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
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-100">Company</h6>
          <ul className="text-gray-400">
            <li className="py-2 text-sm">About us</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Contact us</li>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Testimonials</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-100">Support</h6>
          <ul className="text-gray-400">
            <li className="py-2 text-sm">Help center</li>
            <li className="py-2 text-sm">Terms of service</li>
            <li className="py-2 text-sm">Legal</li>
            <li className="py-2 text-sm">Privacy policy</li>
            <li className="py-2 text-sm">Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-100">Stay up to date</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
