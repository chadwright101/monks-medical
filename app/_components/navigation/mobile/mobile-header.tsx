"use client";

import { useState } from "react";

import classNames from "classnames";

import Logo from "../../logo";
import MobileMenuToggle from "./mobile-menu-toggle";

const MobileHeader = () => {
  const [showMenuToggle, setShowMenuToggle] = useState(false);

  return (
    <header className="desktopSmall:hidden">
      <div
        className={classNames(
          "flex justify-between px-7 py-6 border-b-4 border-brown drop-shadow-default bg-white bg-cover bg-center ease-out delay-300",
          {
            "border-none": showMenuToggle,
            "bg-[url('/images/monks-medical-19.jpg')]": !showMenuToggle,
          }
        )}
      >
        <Logo />
        <button
          className="relative px-4 py-5 -m-3 z-20 desktopSmall:hidden ease-in-out duration-300"
          onClick={() => setShowMenuToggle(!showMenuToggle)}
        >
          <div className="grid gap-1">
            <div
              className={classNames(
                "w-[26px] h-[4px] rounded bg-black dark:bg-white ease-in-out duration-[400ms] transform origin-center",
                {
                  "rotate-[225deg] translate-x-[0.5px] translate-y-[4px]":
                    showMenuToggle,
                }
              )}
            ></div>
            <div
              className={classNames(
                "w-[26px] h-[4px] rounded bg-black dark:bg-white ease-in-out duration-[400ms] transform origin-center",
                {
                  "rotate-[135deg] translate-x-[0.5px] -translate-y-[4px]":
                    showMenuToggle,
                }
              )}
            ></div>
          </div>
        </button>
      </div>
      <MobileMenuToggle
        onClick={() => setShowMenuToggle(!showMenuToggle)}
        cssClasses={classNames(
          "fixed w-full h-full bg-white/95 dark:bg-beige900/[98%] px-6 pt-8 ease-in-out duration-[250ms] tablet:px-10 desktopSmall:hidden",
          {
            "translate-x-0": showMenuToggle,
            "translate-x-full": !showMenuToggle,
          }
        )}
      />
    </header>
  );
};

export default MobileHeader;
