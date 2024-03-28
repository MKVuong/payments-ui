import { useState } from "react";
import { getAllPayments } from "../data/DataFunctions";
import "./Transactions.css";

const Transactions = () => {
  const allPayments = getAllPayments();

  const countries : string[] = allPayments.map(payment => payment.country)
  const uniqueCountries : string[] = Array.from(new Set(countries))

  const [selectedCountry, setSelectedCountry] = useState(uniqueCountries[0]);

  return (
    <div>
      <select 
        onChange={(e) => setSelectedCountry(e.target.value)}
        defaultValue={selectedCountry}
      >
        {uniqueCountries.map((option, idx) => (
          <option key={idx}>{option}</option>
        ))}
      </select>

      <table className="transactionsTable">
        <thead>
          <tr>
            <th>Id</th>
            <th>Date</th>
            <th>Country</th>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {allPayments
            .filter((payment) => payment.country === selectedCountry)
            .map((payment) => {
              return (
                <tr>
                  <td>{payment.id}</td>
                  <td>{payment.date}</td>
                  <td>{payment.country}</td>
                  <td>{payment.currency}</td>
                  <td>{payment.amount}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
