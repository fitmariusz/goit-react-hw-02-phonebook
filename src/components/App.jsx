import './App.css'

import { useState } from "react";



// const INITIAL_STATE = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };
let nextId = 0;

export const App = () => {
  const [name, setName] = useState('');
  const [numbers, setNumber] = useState([]);

    const onClick = () => {
        setNumber([...numbers,{ id: nextId++, name: name }]);
    }
    
    
  return (
          <>
      <h1>Phonebook</h1>
          <input
            type='text'
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={e => setName(e.target.value)}
            required
      />
      <button onClick={() => { onClick() }}>Add</button>
      <ul>
        {numbers.map(number => (<li key={number.id}>{number.name}</li>))}
      </ul>
    </>
  );
};
