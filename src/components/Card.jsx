import React from 'react';

const Card = ({ monthlyRepayments, totalRepayments }) => {
  return (
    <div
      className="bg-[#0E2431] p-8 border-t-5 border-t-(--color-Lime)
 rounded-lg w-full max-w-2xl mt-2"
    >
      <p className="font-extralight text-(--color-Slate300)  mb-3">
        Your monthly repayments
      </p>
      <h2
        className={` font-bold ${
          monthlyRepayments.length > 10 ? 'text-3xl' : 'text-5xl'
        } text-(--color-Lime) mb-5 `}
      >
        £{monthlyRepayments}
      </h2>
      <hr className="text-[#293E4C]" />
      <p className="font-extralight text-(--color-Slate300) mt-7">
        Total you 'll repay over the term
      </p>
      <h2
        className={`text-2xl font-semibold  ${
          monthlyRepayments.length > 10 ? 'text-xl' : 'text-2xl'
        } text-(--color-White) mt-2 `}
      >
        £{totalRepayments}
      </h2>
    </div>
  );
};

export default Card;
