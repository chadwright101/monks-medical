"use client";

import { useEffect, useState } from "react";

import classNames from "classnames";

import Logo from "../../logo";
import MobileMenuToggle from "./mobile-menu-toggle";

const MobileHeader = () => {
  const [showMenuToggle, setShowMenuToggle] = useState(false);

  useEffect(() => {
    if (showMenuToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenuToggle]);

  return (
    <header className="desktopSmall:hidden">
      <div
        className={classNames(
          "flex justify-between px-7 py-6 border-b-4 border-brown drop-shadow-default bg-white bg-cover bg-center",
          {
            "border-white": showMenuToggle,
            "bg-[url('/images/monks-medical-19.jpg')]": !showMenuToggle,
          }
        )}
      >
        <Logo />
        <button
          className="relative px-4 py-5 -m-3 z-20 desktopSmall:hidden ease-in-out duration-300"
          onClick={() => setShowMenuToggle(!showMenuToggle)}
        >
          <div className="grid gap-1.5 -mb-1">
            <div
              className={classNames(
                "w-[26px] h-[3px] rounded bg-black dark:bg-white ease-in-out duration-[400ms] transform origin-center",
                {
                  "rotate-[225deg] translate-x-[0px] translate-y-[4px]":
                    showMenuToggle,
                }
              )}
            ></div>
            <div
              className={classNames(
                "w-[26px] h-[3px] rounded bg-black dark:bg-white ease-in-out duration-[400ms] transform origin-center",
                {
                  "rotate-[135deg] translate-x-[0px] -translate-y-[5px]":
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
          "fixed top-16 z-50 w-full h-screen bg-white dark:bg-beige900/[98%] px-6 pt-12 ease-in-out duration-[250ms] tablet:px-10 desktopSmall:hidden",
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
