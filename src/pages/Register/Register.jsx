import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operation';
import css from './Register.module.css';

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;
    dispatch(register({ name, email, password }));
    form.reset();
  };

  return (
    <div className="container">
      <form className={css.registerForm} onSubmit={handleSubmit}>
        <TextField
          id="userName"
          label="Name"
          name="userName"
          size="small"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        {/* <label htmlFor="userName">Name</label>
        <input
          id="userName"
          type="text"
          name="userName"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /> */}
        <TextField
          id="userMail"
          label="Email"
          type="email"
          name="userMail"
          size="small"
          required
        />
        {/* <label htmlFor="userEmail">Email:</label>
        <input id="userEmail" type="email" name="userEmail" required /> */}
        <TextField
          id="userPassword"
          label="Password"
          type="password"
          name="userPassword"
          size="small"
          required
        />
        {/* <label htmlFor="userPassword">Password</label>
        <input id="userPassword" type="password" name="userPassword" required /> */}
        {/* <button type="submit">Register</button> */}
        <Button variant="contained" type="submit">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
