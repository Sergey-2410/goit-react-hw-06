import { Field, Formik, Form, ErrorMessage } from 'formik';
import s from './ContactForm.module.css';
import * as Yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const initialValues = {
    username: '',
    tel: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.username,
      number: values.tel,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  const FeedbackSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'The field cannot be less than 3 characters!')
      .max(50, 'The field cannot be more than 50 characters!')
      .required('This field is required'),
    tel: Yup.string()
      .min(3, 'The field cannot be less than 3 characters!')
      .max(50, 'The field cannot be more than 50 characters!')
      .required('This field is required'),
  });

  return (
    <div className={s.wrapper}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name</span>
            <Field className={s.input} name="username" />
            <ErrorMessage
              className={s.error}
              name="username"
              component="span"
            />
          </label>
          <label className={s.label}>
            <span>Number</span>
            <Field className={s.input} name="tel" />
            <ErrorMessage className={s.error} name="tel" component="span" />
          </label>
          <button className={s.btnSubmit} type="submit">
            add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
