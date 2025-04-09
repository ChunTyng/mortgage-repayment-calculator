import React from "react";

const Header = () => {
  return (
    <div className="m-5 xl:flex xl:flex-row xl:justify-between xl:items-baseline xl:flex-wrap">
      <h1 className="text-xl mt-4 mb-1 font-(--weight-700) text-(--color-Slate900)">
        Mortgage Calculator
      </h1>
      <button
        className="underline tracking-wider underline-offset-2 text-(--color-Slate500)"
        type="button"
      >
        Clear All
      </button>
    </div>
  );
};

export default Header;
