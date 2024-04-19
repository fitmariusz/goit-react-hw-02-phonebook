import './App.css'

import { useState } from "react";
import { Input } from './Input/Input';

// import { Input } from "./components/Input"



// const INITIAL_STATE = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };
let nextId = 0;
let contactStart = [{id:0,name:"test", number:"12345"}]
export const App = () => {
  const [contacts, setContacts] = useState([]);
  console.log(contacts)

  const onChange = (event) => {
    contactStart.name = event.target.value;
   };

  const onClick = () => {
    setContacts([...contacts, {id: nextId++, name: contactStart.name ,number:"12584" }])
   };
    
  const onSubmit = (event) => {
    event.preventDefault();
   }
    
  return (
    <>
      <form onSubmit={onSubmit}>
      <h1>Phonebook</h1>
      <label>Name
      <Input type="text" name="name" onChange={onChange} pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"></Input></label> 
      <label>Number phone
      <Input type="tel" name="number" onChange={onChange} pattern="\+?\d{1,4}?[ .\\-\\s]?\(?\d{1,3}?\)?[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,4}[ .\\-\\s]?\d{1,9}"></Input></label>
        <button onClick={() => { onClick() }}>Add</button>
         </form>
      <ul>
  
        {contacts.map(contact => <li key={contact.id}>Name: <span>{contact.name}</span> Number: <span>{ contact.number }</span></li>)}
        </ul>
       
    </>
  );
};

