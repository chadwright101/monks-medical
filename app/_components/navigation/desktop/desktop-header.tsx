import Link from "next/link";

import Logo from "../../logo";

import data from "@/app/_data/nav-data.json";

const DesktopHeader = () => {
  return (
    <header className="hidden fixed w-full desktopSmall:flex border-b-4 bg-white border-brown drop-shadow-default ">
      <div className="flex justify-between mx-auto min-w-[1100px] max-w-[1280px] px-[100px] py-6 bg-[url('/images/monks-medical-19.jpg')] bg-cover bg-center relative">
        <div className=" bg-gradient-to-r from-white to-transparent w-[100px] absolute left-0 top-0 h-full"></div>
        <Logo large />
        <ul className="flex gap-3 items-end">
          {data.map(({ title, link }, index) => (
            <li key={index}>
              <Link
                href={link}
                className="text-paragraph pb-1 -mb-1 hover:border-b-[3px] border-khaki ease-in-out duration-150 delay-75"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" bg-gradient-to-r from-transparent to-white w-[100px] absolute right-0 -top-0 h-full"></div>
      </div>
    </header>
  );
};

export default DesktopHeader;
