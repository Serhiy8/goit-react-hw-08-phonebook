import { Button, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operation';
import { selectContacts } from 'redux/contacts/selectors';
import css from './FormAddContact.module.css';
// import {
//   InputContainer,
//   InputContainerLabel,
//   InputContainerInput,
//   FormContact,
//   InputContainerButton,
// } from './FormPhoneBook.styled';
// import { toast } from 'react-toastify';
// import { RotatingLines } from 'react-loader-spinner';

const FormAddContact = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectContacts);

  //   const isLoading = useSelector(selectIsLoading);
  //   const error = useSelector(selectError);

  const checkContact = userName => {
    const normalizedNewContactName = userName.toLowerCase();
    return data.some(
      contact => contact.name.toLowerCase() === normalizedNewContactName
    );
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.userName.value;
    const number = form.elements.userNumber.value;
    checkContact(name)
      ? console.log('Alert')
      : dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <div className="container">
      <form className={css.addForm} onSubmit={handleSubmit}>
        <TextField
          id="Name"
          label="Name"
          name="userName"
          size="small"
          // defaultValue="Default Value"
          // helperText="Some important text"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />

        {/* <label htmlFor="fullName">Full Name:</label>
    <input
      type="text"
      id="fullName"
      name="userName"
      pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    /> */}
        <TextField
          id="Number"
          label="Phone number"
          size="small"
          // defaultValue="Default Value"
          // helperText="Some important text"
          name="userNumber"
          pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        {/* <label htmlFor="phone">Phone number:</label>
    <input
      type="tel"
      id="phone"
      name="userNumber"
      pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
      required
    /> */}

        <Button variant="contained" type="submit">
          Add contact
        </Button>
        {/* <button type="submit">Add contact</button> */}
      </form>
    </div>
  );
};

export default FormAddContact;
