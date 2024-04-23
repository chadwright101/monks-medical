import Link from "next/link";
import Image from "next/image";

import data from "@/app/_data/nav-data.json";

const Footer = () => {
  return (
    <footer className="border-t-2 border-khaki mt-20">
      <div className="py-10 bg-[url('https://ik.imagekit.io/thewrightdesigns/monks-medical/images/tr:w-450/images/monks-medical-18.jpg')] phone:bg-[url('https://ik.imagekit.io/thewrightdesigns/monks-medical/images/tr:w-650/images/monks-medical-18.jpg')] tablet:bg-[url('https://ik.imagekit.io/thewrightdesigns/monks-medical/images/tr:w-1150/images/monks-medical-18.jpg')] bg-cover bg-center max-w-[1100px] mx-auto relative px-8">
        <div className="hidden desktopSmall:block bg-gradient-to-r from-white to-transparent w-8 absolute left-0 top-0 h-full"></div>
        <div className="grid gap-10 desktopSmall:grid-cols-2 desktopSmall:place-items-stretch desktopSmall:gap-5">
          <div className="hidden desktopSmall:block">
            <h4 className="text-paragraph font-medium mb-5">Navigation</h4>
            <ul className="grid gap-1.5">
              {data.map(({ title, link }, index) => (
                <li key={index}>
                  <Link
                    href={link}
                    className="text-paragraph pb-1 -mb-[3px] hover:text-link ease-in-out duration-150 delay-75"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-10 place-items-center desktopSmall:place-items-end desktopSmall:order-3 desktopSmall:col-span-2 place-self-center">
            <Image
              src="/icons/monks-medical-logo-2.svg"
              alt="Monk's Medical logo"
              width={100}
              height={124.49}
              className="desktopSmall:hidden w-[100px]"
            />
            <p className="flex flex-col gap-1 items-center desktopSmall:flex-row desktopSmall:gap-0">
              <Link
                href="https://www.monksmedical.com"
                className="font-light text-link desktopSmall:hover:opacity-80 ease-in-out duration-300 p-2 -m-2 desktopSmall:p-0 desktopSmall:m-0"
              >
                www.monksmedical.com
              </Link>{" "}
              <span className="hidden mx-1 desktopSmall:block">|</span>
              {"© Monk's Medical 2024"}
            </p>
          </div>
          <div className="desktopSmall:grid gap-10 place-items-end">
            <Image
              src="/icons/monks-medical-logo-2.svg"
              alt="Monk's Medical logo"
              width={67}
              height={83}
              className="hidden desktopSmall:block w-[67px]"
            />
            <p className="flex flex-col gap-1 items-center font-thin desktopSmall:items-end">
              Designed & developed by
              <Link
                href="https://www.thewrightdesigns.co.za"
                target="_blank"
                className="font-thin text-link desktopSmall:hover:opacity-80 ease-in-out duration-300 p-2 -m-2 desktopSmall:p-0 desktopSmall:m-0"
              >
                The Wright Designs
              </Link>
            </p>
          </div>
        </div>
        <div className=" bg-gradient-to-r from-transparent to-white w-8 absolute right-0 -top-0 h-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
