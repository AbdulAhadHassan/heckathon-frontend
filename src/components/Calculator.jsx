// import React, { useState } from 'react';
// import axios from 'axios';

// function Calculator() {
//   const [num1, setNum1] = useState(0);
//   const [num2, setNum2] = useState(0);
//   const [operation, setOperation] = useState('add');
//   const [result, setResult] = useState(null);

//   const handleCalculate = async () => {
//     try {
//       const response = await axios.post('http://localhost:3000/calculate', {
//         num1: parseFloat(num1),
//         num2: parseFloat(num2),
//         operation,
//       });
//       setResult(response.data.result);
//     } catch (error) {
//       console.error('Error calculating:', error);
//     }
//   };

//   return (
//     <div className="calculator">
//       <h2>Calculator</h2>
//       <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Number 1" />
//       <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Number 2" />
//       <select value={operation} onChange={(e) => setOperation(e.target.value)}>
//         <option value="add">Add</option>
//         <option value="subtract">Subtract</option>
//         <option value="multiply">Multiply</option>
//         <option value="divide">Divide</option>
//       </select>
//       <button onClick={handleCalculate}>Calculate</button>
//       {result !== null && <p>Result: {result}</p>}
//     </div>
//   );
// }

// export default Calculator;

"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoanCalculator() {
  const [amount, setAmount] = useState(10000)
  const [term, setTerm] = useState(12)
  const [rate, setRate] = useState(5)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const calculateLoan = () => {
    const monthlyRate = rate / 100 / 12
    const payment = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1)
    setMonthlyPayment(payment)
  }

  return (
    <section id="calculator" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Loan Calculator</h2>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="space-y-4">
            <div>
              <Label htmlFor="amount">Loan Amount ($)</Label>
              <Input id="amount" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            </div>
            <div>
              <Label htmlFor="term">Loan Term (months)</Label>
              <Input id="term" type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} />
            </div>
            <div>
              <Label htmlFor="rate">Interest Rate (%)</Label>
              <Input
                id="rate"
                type="number"
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
                step="0.1"
              />
            </div>
            <Button onClick={calculateLoan} className="w-full">
              Calculate
            </Button>
          </div>
          {monthlyPayment > 0 && (
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold">Estimated Monthly Payment</h3>
              <p className="text-3xl font-bold text-primary">${monthlyPayment.toFixed(2)}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}