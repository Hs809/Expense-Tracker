import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction  from "./Transaction";

function TransactionList() {
  const { transaction } = useContext(GlobalContext);
  console.log(transaction)
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transaction.map((data) => (
          // console.log(data.amount)
          <Transaction key = {data.id}  data = {data} />
        )
        )}
      </ul>
    </div>
  );
}

export default TransactionList;
