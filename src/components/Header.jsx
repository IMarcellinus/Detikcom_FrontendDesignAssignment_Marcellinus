import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <header className="shadow-md w-full fixed top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-[#007CBD] py-2 md:px-10 px-7">
        <div className="flex-items-center text-white">
          <p>
            <b>detik</b>finance
          </p>
          <p className="uppercase font-bold text-lg">business plan</p>
          <p className="tracking-widest">competition 2023</p>
        </div>
        <div className="text-3xl absolute right-8 top-8 cursor-pointer block md:hidden" onClick={() => setDropdown(!dropdown)}>
          <RxHamburgerMenu className="text-white"/>
        </div>
        <ul className={`md:flex md:items-center md:flex-row md:gap-12 md:pb-0 pb-4 absolute md:static bg-blue-400 md:bg-transparent md:z-auto z-[-1] left-0 w-full md:w-auto md:top-0 top-[5.6rem] flex flex-col ${dropdown ? 'block' : 'hidden'} text-center items-center`}>
          <li className="md:my-0 my-4 md:ml-8">
            <a href="#" className="text-white text-base ">
              About
            </a>
          </li>
          <li className="md:my-0 my-4">
            <a href="#" className="text-white text-base">
              Mechanism
            </a>
          </li>
          <li className="md:my-0 my-4">
            <a href="#" className="text-white text-base">
              Latest Update
            </a>
          </li>
          <li className="text-[#007CBD] w-fit bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full px-5 py-2.5 md:my-0 my-4 ">
            <a href="#">Register</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
