import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';
import Calculation from './components/calculation';
import { useState, useEffect } from 'react';

function App() {
  // useState
  const [mortgageAmount, setMortgageAmount] = useState('');
  const [mortgageTerm, setMortgageTerm] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [mortgageType, setMortgageType] = useState('');

  const [formattedMortgageAmount, setFormattedMortgageAmount] = useState('');

  const [monthlyRepayments, setmonthlyRepayments] = useState(null);
  const [totalRepayments, settotalRepayments] = useState(null);

  const [mortgageAmountError, setMortgageAmountError] = useState(false);
  const [mortgageTermError, setMortgageTermError] = useState(false);
  const [interestRateError, setInterestRateError] = useState(false);
  const [mortgageTypeError, setMortgageTypeError] = useState(false);

  const [submitted, setSubmitted] = useState(true);
  const [result, setResult] = useState(false);

  // useEffect
  useEffect(() => {
    if (mortgageAmount !== null) {
      setFormattedMortgageAmount(commarize(mortgageAmount));
    }
  }, [mortgageAmount]);

  // variables
  const mortgageAmountValue = parseFloat(mortgageAmount);
  const mortgageTermValue = parseFloat(mortgageTerm);
  const interestRateValue = parseFloat(interestRate);

  //formula
  // prettier-ignore
  const monthlyRepaymentsFormula = (((interestRate / 100) / 12) *  
  Math.pow((1 + ((interestRate / 100) / 12)),mortgageTerm * 12)) /  
  (Math.pow((1 + ((interestRate / 100) / 12)),mortgageTerm * 12) - 1);

  // function
  const repaymentCalculation = () => {
    if (mortgageAmountValue && mortgageTermValue && interestRateValue) {
      const monthlyPayment = (
        mortgageAmountValue * monthlyRepaymentsFormula
      ).toFixed(2);
      setmonthlyRepayments(monthlyPayment);

      settotalRepayments(
        (
          mortgageAmountValue *
          monthlyRepaymentsFormula *
          (mortgageTermValue * 12)
        ).toFixed(2),
      );
    }
  };

  const interestOnlyCalculation = () => {
    if (mortgageAmountValue && interestRateValue) {
      //prettier-ignore
      const monthlyInterestRate = (interestRateValue / 100 ) / 12;

      const monthlyInterestPayment = mortgageAmountValue * monthlyInterestRate;

      setmonthlyRepayments(monthlyInterestPayment.toFixed(2));
      settotalRepayments(
        (monthlyInterestPayment * mortgageTermValue * 12).toFixed(2),
      );
    }
  };

  const commarize = (number) => {
    if (number == null || isNaN(number)) return '0';

    const [integerPart, decimalPart] = number.toString().split('.');

    let result = '';
    let count = 0;
    for (let i = integerPart.length - 1; i >= 0; i--) {
      result = integerPart[i] + result;
      count++;
      if (count % 3 === 0 && i !== 0) {
        result = ',' + result;
      }
    }

    return decimalPart ? `${result}.${decimalPart}` : result;
  };

  const clearAll = () => {
    setMortgageAmount(null);
    setMortgageTerm(null);
    setInterestRate(null);
    setMortgageType('');
    setmonthlyRepayments(null);
    settotalRepayments(null);
    setResult(false);
    setFormattedMortgageAmount('');
  };

  return (
    <div className="h-svh flex justify-center items-center bg-(--color-Slate100)">
      <div
        className="h-auto xl:rounded-3xl xl:flex xl:flex-row xl:m-5 xl:justify-center
        items-center bg-(--color-white) sm:mx-5 md:m-5 md:rounded-lg"
      >
        <div className="md:p-8 xl:w-120 xl:h-150 flex flex-col xl:px-5 items-center mx-5">
          <Header clearAll={clearAll} />
          <Form
            mortgageAmount={mortgageAmount}
            setMortgageAmount={setMortgageAmount}
            mortGageTermState={{ mortgageTerm, setMortgageTerm }}
            interestRateState={{ interestRate, setInterestRate }}
            mortgageTypeState={{ mortgageType, setMortgageType }}
            repaymentCalculation={repaymentCalculation}
            interestOnlyCalculation={interestOnlyCalculation}
            formattedMortgageAmountState={{
              formattedMortgageAmount,
              setFormattedMortgageAmount,
            }}
            resultState={{ result, setResult }}
            submittedState={{
              submitted,
              setSubmitted,
            }}
            mortgageAmountErrorState={{
              mortgageAmountError,
              setMortgageAmountError,
            }}
            mortgageTermErrorState={{ mortgageTermError, setMortgageTermError }}
            interestRateErrorState={{ interestRateError, setInterestRateError }}
            mortgageTypeErrorState={{ mortgageTypeError, setMortgageTypeError }}
          />
        </div>
        {result ? (
          <Calculation
            commarize={commarize}
            monthlyRepayments={monthlyRepayments}
            totalRepayments={totalRepayments}
          />
        ) : (
          <Footer />
        )}
      </div>
    </div>
  );
}

export default App;
