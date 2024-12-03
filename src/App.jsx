import '../index.css';
import 'modern-normalize';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const App = () => {
  const data = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? data
  );
  const [value, setValue] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const dataRequest = e => {
    setValue(e.target.value);
  };

  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(value.toLowerCase())
  );
  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };
  const handleAdd = ({ username, tel }) => {
    const newContact = {
      id: nanoid(),
      name: username,
      number: tel,
    };
    setContacts(prev => [...prev, newContact]);
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm handleAdd={handleAdd} />
      <SearchBox dataRequest={dataRequest} />
      <ContactList
        filterContacts={filterContacts}
        handleDelete={handleDelete}
      />
    </div>
  );
};
export default App;
