import React from "react";

interface ButtonInterface {
  children: string;
  theme: "orange" | "white";
}

const Button = ({ theme, children }: ButtonInterface) => {
  return (
    <button
      className={`${
        theme === "orange"
          ? "bg-orange-400 text-white"
          : "bg-white text-orange-400"
      } rounded-full py-2 px-6 font-semibold shadow-2xl cursor-pointer hover:opacity-80 h-fit` }
    >
      {children}
    </button>
  );
};

export default Button;
