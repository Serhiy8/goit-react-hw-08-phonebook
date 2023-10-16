import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operation';
import css from './Login.module.css';

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements.userMail.value;
    const password = form.elements.userPassword.value;
    dispatch(login({ email, password }));
    form.reset();
  };

  return (
    <div className="container">
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <TextField
          id="userMail"
          label="Email"
          name="userMail"
          size="small"
          required
        />
        {/* <label htmlFor="userMail">Mail</label>
      <input type="text" id="userMail" name="userMail" /> */}
        <TextField
          id="userPassword"
          label="Password"
          type="password"
          name="userPassword"
          size="small"
          required
        />
        {/* <label htmlFor="userPassword">Password</label>
      <input type="text" id="userPassword" name="userPassword" /> */}
        <Button variant="contained" type="submit">
          Log in
        </Button>
        {/* <button type="submit">Log in</button> */}
      </form>
    </div>
  );
};

export default Login;
