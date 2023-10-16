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
        <TextField
          id="userPassword"
          label="Password"
          type="password"
          name="userPassword"
          size="small"
          required
        />
        <Button variant="contained" type="submit">
          Log in
        </Button>
      </form>
    </div>
  );
};

export default Login;
