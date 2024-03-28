import { ChangeEvent, useEffect, useState } from "react";
import { PaymentType, getAllPayments, getCountries, getPaymentsForCountry, getPaymentsFromServer } from "../data/DataFunctions";
import "./Transactions.css";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  //const allPayments = getAllPayments();
  //getPaymentsFromServer();

  const [countries,setCountries] = useState<string[]>([]);
  const [transactions, setTransactions] = useState<PaymentType[]>([])
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect( () => {
    const countriesPromise : Promise<AxiosResponse<string[]>> = getCountries();
    countriesPromise.then ( result => {
      if (result.status === 200) {
        setCountries(result.data)
      }
      else{
        console.log("something went wrong")
      }
  }).catch (error => console.log(error))
}, [] )

useEffect( () => {
  getPaymentsForCountry(selectedCountry).then ( result => {
    if (result.status === 200) {
      setTransactions(result.data)
    }
    else{
      console.log("something went wrong")
    }
})
}, [selectedCountry] )

const navigate = useNavigate()

  // const changeCountry = (e :ChangeEvent<HTMLSelectElement>) => {
  //   const option = e.target.options.selectedIndex;
  //   setSelectedCountry(countries[option])
  //   getPaymentsForCountry(countries[option]).then ( result => {
  //     if (result.status === 200) {
  //     setTransactions(result.data)
  //   }
  //   })
  // }

//   return (<>
//     <div className="transactionsCountrySelector">
//             Select country: {}
//     </div>
// <table className="transactionsTable">
//       <thead>
//         <tr><th>Id</th><th>orderId</th><th>Date</th><th>Country</th><th>Currency</th><th>Amount</th></tr>
//       </thead>
//       <tbody>
//         {payments
//             .filter( payment => payment.country === selectedCountry)
//             .map((payment) => <PaymentTableRow key={payment.id} {...payment} />)}
//       </tbody>
//   </table>
//   </>
// );

  return (
    <div>Select Country: 
      <select 
        onChange={(e) => {
          setSelectedCountry(e.target.value)
          {navigate("/find?country=" + e.target.value)}
        }}
      >
        {countries.map((option, idx) => (
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
          {transactions
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
