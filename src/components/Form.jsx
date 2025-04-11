import React from 'react';
import iconCalculator from '../assets/images/icon-calculator.svg';

const Form = ({
  mortgageAmount,
  setMortgageAmount,
  mortGageTermState,
  interestRateState,
  mortgageTypeState,

  formattedMortgageAmountState,

  resultState,
  submittedState,
  mortgageAmountErrorState,
  mortgageTermErrorState,
  interestRateErrorState,
  mortgageTypeErrorState,

  //function
  repaymentCalculation,
  interestOnlyCalculation,
}) => {
  const { mortgageTerm, setMortgageTerm } = mortGageTermState;
  const { interestRate, setInterestRate } = interestRateState;
  const { mortgageType, setMortgageType } = mortgageTypeState;

  const { formattedMortgageAmount, setFormattedMortgageAmount } =
    formattedMortgageAmountState;

  const { result, setResult } = resultState;
  const { submitted, setSubmitted } = submittedState;

  const { mortgageAmountError, setMortgageAmountError } =
    mortgageAmountErrorState;
  const { mortgageTermError, setMortgageTermError } = mortgageTermErrorState;
  const { interestRateError, setInterestRateError } = interestRateErrorState;
  const { mortgageTypeError, setMortgageTypeError } = mortgageTypeErrorState;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);

        const isAmountValid = (mortgageAmount ?? '').trim() !== '';
        const isTermValid = (mortgageTerm ?? '').trim() !== '';
        const isRateValid = (interestRate ?? '').trim() !== '';
        const isTypeValid = mortgageType !== null && mortgageType !== '';

        setMortgageAmountError(!isAmountValid);
        setMortgageTermError(!isTermValid);
        setInterestRateError(!isRateValid);
        setMortgageTypeError(!isTypeValid);

        const allValid =
          isAmountValid && isTermValid && isRateValid && isTypeValid;

        if (!allValid) return;

        setResult(true);

        if (mortgageType === 'InterestOnly') {
          interestOnlyCalculation();
        } else if (mortgageType === 'Repayment') {
          repaymentCalculation();
        }
      }}
      className=" flex flex-col max-lg:px-5 pt-2 w-full text-(--color-Slate500) font-(--weight-500) "
    >
      <label className="mb-2">Mortgage Amount</label>
      <div
        className={`group flex flex-row xl:flex-wrap gap-0 items-center w-full mb-2`}
      >
        <p
          className={`p-2 rounded-l-sm border-y-1 border-l-1 xl:basis-1/12 w-10 text-center
      ${
        mortgageAmountError
          ? 'border-(--color-Red) bg-(--color-Red) text-white'
          : 'border-(--color-Slate500) bg-(--color-Slate100) text-(--color-Slate700)'
      }
      group-focus-within:border-(--color-Lime)
      group-focus-within:border-r-0 group-focus-within:bg-(--color-Lime) 
      group-hover:border-(--color-Slate900) group-focus-within:group-hover:border-(--color-Lime)
      group-focus-within:text-(--color-Slate900)`}
        >
          &#163;
        </p>
        <input
          className={`p-2 rounded-sm rounded-tl-none rounded-bl-none w-full xl:basis-11/12
      border border-l-0
      ${
        mortgageAmountError
          ? 'border-(--color-Red)'
          : 'border-(--color-Slate500)'
      }
      focus:outline-none focus:border-y-1 focus:border-(--color-Lime)
      hover:cursor-pointer hover:border-(--color-Slate900)`}
          type="text"
          onChange={(e) => setMortgageAmount(e.target.value.replace(/,/g, ''))}
          value={formattedMortgageAmount}
        />
      </div>
      {mortgageAmountError && (
        <p className="text-[var(--color-Red)] text-sm">
          This field is required
        </p>
      )}

      <div className="xl:flex flex-row mt-7 items-center xl:gap-4 xl:justify-center">
        <div className="xl:flex xl:flex-col mb-3">
          <label className="xl:basis-1/3">Mortgage Term</label>
          <div className="xl:basis-2/3 group flex flex-row items-center w-full mt-2 mb-2">
            <input
              className={`p-2 rounded-sm rounded-r-none w-full 
               border border-r-0  focus:outline-none  
               ${
                 mortgageTermError
                   ? 'border-(--color-Red)'
                   : 'border-(--color-Slate500)  text-(--color-Slate700)'
               }
              focus:border-y-1 focus:border-(--color-Lime) hover:cursor-pointer group-hover:border-(--color-Slate900)`}
              type="text"
              id="mortgageTerm"
              name="mortgageTerm"
              onChange={(e) => setMortgageTerm(e.target.value)}
              value={mortgageTerm === null ? '' : mortgageTerm}
            />
            <p
              className={`text-(--color-Slate700) p-2 rounded-tr-sm rounded-br-sm  border-y-1 border-r-1 
             w-18 text-center 
            ${
              mortgageTermError
                ? 'border-(--color-Red) bg-(--color-Red) text-White'
                : 'border-(--color-Slate500) bg-(--color-Slate100)'
            }
            group-hover:border-(--color-Slate900) group-focus-within:group-hover:border-(--color-Lime)
            group-focus-within:border-(--color-Lime) group-focus-within:border-r-0
            group-focus-within:bg-(--color-Lime) group-focus-within:text-(--color-Slate900)`}
            >
              years
            </p>
          </div>
          {mortgageTermError ? (
            <p className="text-(--color-Red) text-sm opacity-100">
              This field is required
            </p>
          ) : (
            <p className="text-(--color-Red) text-sm opacity-0">
              This field is required
            </p>
          )}
        </div>

        <div className="xl:flex xl:flex-col mb-3">
          <label className="xl:basis-1/3">Interest Rate</label>
          <div className="group flex flex-row gap-0 items-center w-full mb-2 mt-2">
            <input
              className={`p-2 rounded-sm rounded-r-none w-full 
           border border-r-0  focus:outline-none  
           ${
             interestRateError
               ? 'border-(--color-Red)'
               : 'border-(--color-Slate500)  text-(--color-Slate700)'
           }
          focus:border-y-1 focus:border-(--color-Lime) hover:cursor-pointer group-hover:border-(--color-Slate900)`}
              type="text"
              id="mortgageAmount"
              name="mortgageAmount"
              onChange={(e) => setInterestRate(e.target.value)}
              value={interestRate === null ? '' : interestRate}
            />
            <p
              className={`text-(--color-Slate700) p-2 rounded-tr-sm rounded-br-sm  border-y-1 border-r-1 
         w-10 text-center  
        ${
          interestRateError
            ? 'border-(--color-Red) bg-(--color-Red) text-White'
            : 'border-(--color-Slate500) bg-(--color-Slate100)'
        }
        group-hover:border-(--color-Slate900) group-focus-within:group-hover:border-(--color-Lime)
        group-focus-within:border-(--color-Lime) group-focus-within:border-r-0
        group-focus-within:bg-(--color-Lime) group-focus-within:text-(--color-Slate900)`}
            >
              %
            </p>
          </div>
          {interestRateError ? (
            <p className="text-(--color-Red) text-sm opacity-100">
              This field is required
            </p>
          ) : (
            <p className="text-(--color-Red) text-sm opacity-0">
              This field is required
            </p>
          )}
        </div>
      </div>

      <fieldset className="flex flex-col gap-2 ">
        <legend className="mb-2">Mortgage Type</legend>
        <label
          className="border-(--color-Slate500) text-(--color-Slate900) font-(--weight-700) border rounded-sm p-2 px-3 w-full  
         hover:cursor-pointer  has-checked:bg-[#f9fae0] has-checked:border-(--color-Lime) "
        >
          <input
            type="radio"
            name="mortgageType"
            className="mr-4 accent-[var(--color-Lime)] hover:cursor-pointer"
            onChange={(e) => setMortgageType(e.target.value)}
            value="Repayment"
            checked={mortgageType === 'Repayment'}
            // 78.05%（supported)	+	16.54%(Partially Supported)	=	94.6%
          />
          {'Repayment'}
        </label>
        {/* inline-flex relative items-center gap-4 */}
        <label
          className="border-(--color-Slate500) text-(--color-Slate900) font-(--weight-700) border rounded-sm p-2 px-3 w-full  
          hover:cursor-pointer  has-checked:bg-[rgb(249,250,224)] has-checked:border-(--color-Lime) 
        "
        >
          <input
            type="radio"
            name="mortgageType"
            className="mr-4  accent-[var(--color-Lime)] hover:cursor-pointer"
            onChange={(e) => setMortgageType(e.target.value)}
            value="InterestOnly"
            checked={mortgageType === 'InterestOnly'}
          />
          {'Interest Only'}
        </label>
        {mortgageTypeError && (
          <p className="text-(--color-Red) text-sm">This field is required</p>
        )}
        <button
          type="submit"
          className="xl:w-[70%] 448:self-center xl:self-start text-(--color-Slate900) font-(--weight-700) 
          my-3 flex flex-rol justify-center gap-3 p-3 px-3 rounded-4xl ; 
          w-full max-w-md bg-(--color-Lime) xl:mt-3 hover:cursor-pointer hover:bg-[#ECEE96]"
        >
          <img src={iconCalculator} alt="iconCalculator" />
          Calculate Repayments
        </button>
      </fieldset>
    </form>
  );
};

export default Form;
