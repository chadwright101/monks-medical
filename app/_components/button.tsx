import Link from "next/link";

import classNames from "classnames";

interface Props {
  link?: string;
  children: React.ReactNode;
  backgroundColor?: "brown" | "green" | "khaki" | "black" | "light brown";
  cssClasses?: string;
  additionalServices?: boolean;
  onClick?: () => void;
  form?: boolean;
  disabled?: boolean;
  type?: "submit";
}

const Button = ({
  link,
  children,
  backgroundColor = "brown",
  cssClasses,
  additionalServices,
  onClick,
  form,
  disabled,
  type,
}: Props) => {
  if (!additionalServices && link) {
    return (
      <Link
        href={link}
        className={classNames(
          `px-7 py-5 text-center rounded-lg uppercase text-button ${cssClasses}`,
          {
            "bg-brown text-white": backgroundColor === "brown",
            "bg-green text-white": backgroundColor === "green",
            "bg-khaki text-white": backgroundColor === "khaki",
            "bg-black text-white": backgroundColor === "black",
            "bg-lightBrown text-black": backgroundColor === "light brown",
          }
        )}
      >
        {children}
      </Link>
    );
  } else if (form) {
    return (
      <button
        type={type || "button"}
        className={classNames(
          `px-7 py-5 text-center rounded-lg uppercase text-button ${cssClasses}`,
          {
            "bg-brown text-white": backgroundColor === "brown",
            "bg-green text-white": backgroundColor === "green",
            "bg-khaki text-white": backgroundColor === "khaki",
            "bg-black text-white": backgroundColor === "black",
            "bg-lightBrown text-black": backgroundColor === "light brown",
          }
        )}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        type="button"
        className={`text-paragraph text-center px-2.5 py-2 -mx-2.5 -my-2 rounded desktopSmall:hover:text-white desktopSmall:rounded-none ease-in-out ${cssClasses}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

export default Button;
