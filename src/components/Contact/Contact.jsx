import { FaUser } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.box}>
      <div className={s.boxContact}>
        <p className={s.text}>
          <FaUser /> {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button
        onClick={() => dispatch(deleteContact(id))}
        className={s.btnClear}
        type="button"
      >
        Delete
      </button>
    </div>
  );
};
export default Contact;
