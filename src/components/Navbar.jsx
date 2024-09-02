import logo from "../assets/logo.svg";
import { navItems } from "../constrants";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between item-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-15 mr-2" src={logo} alt="logo" />
          </div>
          <ul className="hidden lg:flex  ml-14 space-x-12 items-center">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <a href="#" className="py-2 px-3 border rounded-md">
              Login
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-green-500 to-green-500 py-2 px-3 rounded-md"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
