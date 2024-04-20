import { searchContact } from "../Search/Search";

export const ContactList = ({ dataPhonebook, onDelete, onChange }) => { 

  return (<>
      <input type="search" name="filter" onChange={onChange} placeholder='Search'></input>
    <ul>
          {searchContact(dataPhonebook.contacts, dataPhonebook.filter).length !== 0 ? 
            searchContact(dataPhonebook.contacts, dataPhonebook.filter).map(contact =>
              <li key={contact.id}><span>{contact.name}{": "}</span><span>{contact.number}{" "}</span>
                <button onClick={() => onDelete(contact.id)} required>Delete</button></li>)
            :
          <p>No contacts....</p>}
      </ul>
    </>);
};