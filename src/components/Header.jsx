import React from 'react';

const Header = ({ clearAll }) => {
  return (
    <div className="448:flex 448:flex-rol 448:justify-between 448:items-baseline max-lg:px-5 w-full xl:flex xl:flex-row xl:justify-between xl:items-baseline xl:flex-wrap">
      <h1 className="text-xl mt-4 mb-1 font-(--weight-700) text-(--color-Slate900)">
        Mortgage Calculator
      </h1>
      <button
        className="underline tracking-wider underline-offset-2 text-(--color-Slate500) hover:cursor-pointer"
        type="button"
        onClick={clearAll}
      >
        Clear All
      </button>
    </div>
  );
};

export default Header;
