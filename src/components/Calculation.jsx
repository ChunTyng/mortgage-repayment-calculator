import React from 'react';
import Card from './Card';

const Calculation = ({ commarize, monthlyRepayments, totalRepayments }) => {
  return (
    <footer
      className="xl:rounded-r-3xl xl:rounded-bl-[72px] gap-2 xl:w-120 xl:h-150 p-8 flex flex-col 
    justify-stretch bg-(--color-Slate900)"
    >
      <h2 className="text-2xl font-(--weight-500) mb-2 text-(--color-White) mt-4">
        Your results
      </h2>
      <p className="text-left font-extralight text-(--color-Slate300) my-5 text-wrap">
        Your results are shown below based on the information you provided. To
        adjust the results.edit the form and click "calculate Repayments" again.
      </p>
      <Card
        monthlyRepayments={commarize(monthlyRepayments)}
        totalRepayments={commarize(totalRepayments)}
      />
    </footer>
  );
};

export default Calculation;
