import React,{useState,useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

function AddTransaction() {
  const [text,setText] = useState('');
  const [amount,setAmount] = useState(0);
  const { addTransaction } = useContext(GlobalContext);
  
 const submitData = (e) => {
  e.preventDefault();
  const trasaction = {
    id: Math.floor(Math.random() * 100000),
    text,
    amount: +amount
  }
  addTransaction(trasaction)
  setAmount('')
  setText('')
 }  
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit = {submitData} >
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value = {text} onChange = {(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor ="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value = {amount} onChange = {(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button type = "submit" className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
