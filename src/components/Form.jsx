import React from "react";
import iconCalculator from "../assets/images/icon-calculator.svg";

const Form = () => {
  return (
    <form className="flex flex-col  gap-2 m-5 text-(--color-Slate500) font-(--weight-500)">
      <label>Mortgage Amount</label>
      <div className="group flex flex-row xl:flex-wrap gap-0 items-center w-full max-w-md mb-3">
        <p
          className="text-(--color-Slate700) p-2 rounded-l-sm border-y-1 border-l-1 
        border-(--color-Slate500) xl:basis-1/12 w-10 text-center bg-(--color-Slate100) 
        group-focus-within:border-(--color-Lime) group-focus-within:border-r-0
        group-focus-within:bg-(--color-Lime) group-focus-within:text-(--color-Slate900)"
        >
          &#163;
        </p>
        <input
          className="p-2 rounded-sm rounded-tl-none rounded-bl-none w-full 
          max-w-md xl:basis-11/12 border border-l-0 border-(--color-Slate500) focus:outline-none  
          focus:border-y-1 focus:border-(--color-Lime)"
          type="text"
        />
      </div>
      <div className="xl:flex xl:flex-row xl:gap-5 xl:items-center">
        <div className="xl:flex xl:flex-col max-w-md">
          <label className="xl:basis-1/3 mb-2">Mortgage Term</label>

          <div className="xl:basis-2/3 group flex flex-row items-center w-full mb-3">
            <input
              className="p-2 rounded-sm rounded-r-none w-full 
              max-w-md border border-r-0 border-(--color-Slate500) focus:outline-none  
              focus:border-y-1 focus:border-(--color-Lime)"
              type="text"
              id="mortgageTerm"
              name="mortgageTerm"
            />
            <p
              className="text-(--color-Slate700) p-2 rounded-tr-sm rounded-br-sm  border-y-1 border-r-1 
      border-(--color-Slate500) w-18 text-center bg-(--color-Slate100) 
      group-focus-within:border-(--color-Lime) group-focus-within:border-r-0
      group-focus-within:bg-(--color-Lime) group-focus-within:text-(--color-Slate900)"
            >
              years
            </p>
          </div>
        </div>

        <div className="xl:flex xl:flex-col">
          <label className="xl:basis-1/3 mb-2">Interest Rate</label>
          <div className="group flex flex-row gap-0 items-center w-full max-w-md mb-3">
            <input
              className="p-2 rounded-sm rounded-r-none w-full 
          max-w-md border border-r-0 border-(--color-Slate500) focus:outline-none  
          focus:border-y-1 focus:border-(--color-Lime)"
              type="text"
              id="mortgageAmount"
              name="mortgageAmount"
            />
            <p
              className="text-(--color-Slate700) p-2 rounded-tr-sm rounded-br-sm  border-y-1 border-r-1 
        border-(--color-Slate500) w-18 text-center bg-(--color-Slate100) 
        group-focus-within:border-(--color-Lime) group-focus-within:border-r-0
        group-focus-within:bg-(--color-Lime) group-focus-within:text-(--color-Slate900)"
            >
              %
            </p>
          </div>
        </div>
      </div>
      <fieldset className="flex flex-col gap-2 ">
        <legend className="mb-2">Mortgage Type</legend>

        <label
          className="border-(--color-Slate500) text-(--color-Slate900) font-(--weight-700) border rounded-sm p-2 px-3 w-full max-w-md 
         hover:cursor-pointer  has-checked:bg-[#f9fae0] has-checked:border-(--color-Lime) "
        >
          <input
            type="radio"
            name="mortgageType"
            value="Repayment"
            className="mr-4 accent-[var(--color-Lime)] hover:cursor-pointer" //
            // 78.05%（supported)	+	16.54%(Partially Supported)	=	94.6%
          />
          {"Repayment"}
        </label>
        {/* inline-flex relative items-center gap-4 */}
        <label
          className="border-(--color-Slate500) text-(--color-Slate900) font-(--weight-700) border rounded-sm p-2 px-3 w-full max-w-md 
          hover:cursor-pointer  has-checked:bg-[#f9fae0] has-checked:border-(--color-Lime) 
        "
        >
          <input
            type="radio"
            name="mortgageType"
            value="InterestOnly"
            className="mr-4  accent-[var(--color-Lime)] hover:cursor-pointer"
          />
          {"Interest Only"}
        </label>

        <button
          type="submit"
          className="xl:w-[70%] text-(--color-Slate900) font-(--weight-700) 
          my-3 flex flex-rol justify-center gap-3 p-3 px-3 rounded-4xl 
          w-full max-w-md bg-(--color-Lime) xl:mt-6 hover:cursor-pointer"
        >
          <img src={iconCalculator} alt="" />
          Calculate Repayments
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
