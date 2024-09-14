import React, { useState } from 'react';

const FinancingCalculator = () => {
  const [amount, setAmount] = useState();
  const [interestRate, setInterestRate] = useState();
  const [termYears, setTermYears] = useState();
  const [termMonths, setTermMonths] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState('monthly');
  const [paymentResult, setPaymentResult] = useState(null);

  const calculatePayment = () => {
    const principal = parseFloat(amount);
    const annualInterestRate = parseFloat(interestRate);
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const totalMonths = termYears * 12 + termMonths;

    let payment = 0;

    if (paymentFrequency === 'monthly') {
      payment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
                (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
    } else if (paymentFrequency === 'yearly') {
      const yearlyInterestRate = Math.pow(1 + monthlyInterestRate, 12) - 1;
      payment = principal * (yearlyInterestRate * Math.pow(1 + yearlyInterestRate, termYears)) /
                (Math.pow(1 + yearlyInterestRate, termYears) - 1);
    }

    setPaymentResult(payment.toFixed(2));
  };

  return (
    <div className="finance-calculator p-5 rounded-lg shadow-lg hover:shadow-2xl bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Financing Calculator</h2>
      <div className="mb-4">
        <label className="block font-semibold">Amount:</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Interest Rate (% per year):</label>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Term:</label>
        <div className="flex space-x-2">
          <input
            type="number"
            value={termYears}
            onChange={(e) => setTermYears(e.target.value)}
            className="w-1/2 p-2 border rounded"
            placeholder="Years"
          />
          <input
            type="number"
            value={termMonths}
            onChange={(e) => setTermMonths(e.target.value)}
            className="w-1/2 p-2 border rounded"
            placeholder="Months"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Payment Frequency:</label>
        <select
          value={paymentFrequency}
          onChange={(e) => setPaymentFrequency(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <button
        onClick={calculatePayment}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Calculate Payment
      </button>
      {paymentResult && (
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Payment Amount: {paymentFrequency === 'monthly' ? 'Monthly' : 'Yearly'}</h3>
          <p className="text-2xl">{paymentResult}</p>
        </div>
      )}
    </div>
  );
};

export default FinancingCalculator;
