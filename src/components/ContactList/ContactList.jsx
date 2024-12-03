import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = () => {
  const selectContacts = useSelector(state => state.contacts.contacts.items);
  const selectNameFilter = useSelector(state => state.filters.filters.name);

  const filteredContacts = selectContacts.filter(contact =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );
  return (
    <ul className={s.contactList}>
      {filteredContacts.map(contact => (
        <li className={s.contactItem} key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
