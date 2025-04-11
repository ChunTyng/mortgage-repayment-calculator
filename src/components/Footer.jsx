import React from 'react';
import illustration from '../assets/images/illustration-empty.svg';

const Footer = () => {
  return (
    <footer className=" md:rounded-lg w-auto xl:rounded-r-3xl sm:rounded-b-3xl xl:rounded-bl-[72px] xl:w-120 xl:h-150 p-5 gap-2 flex flex-col justify-center items-center bg-(--color-Slate900)">
      <img src={illustration} alt="illustration-empty" />
      <h2 className="text-xl font-(--weight-500) mb-2 text-(--color-White)">
        Results shown here
      </h2>
      <p className="text-center font-extralight text-(--color-Slate300)">
        Complete the form and click "calculate repayments" to see what your
        monthly repayments would be.
      </p>
    </footer>
  );
};

export default Footer;
