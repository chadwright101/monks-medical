import classNames from "classnames";
import Link from "next/link";

interface Props {
  link: string;
  children: React.ReactNode;
  backgroundColor?: "brown" | "green" | "khaki" | "black" | "light brown";
}

const Button = ({ link, children, backgroundColor = "brown" }: Props) => {
  return (
    <Link
      href={link}
      className={classNames("px-7 py-5 text-center", {
        "bg-brown text-white": backgroundColor === "brown",
        "bg-green text-white": backgroundColor === "green",
        "bg-khaki text-white": backgroundColor === "khaki",
        "bg-black text-white": backgroundColor === "black",
        "bg-lightBrown text-black": backgroundColor === "light brown",
      })}
    >
      {children}
    </Link>
  );
};

export default Button;