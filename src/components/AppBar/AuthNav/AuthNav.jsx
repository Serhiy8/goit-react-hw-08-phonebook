import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <ul className={css.authNavList}>
      <li>
        <Link className={css.authNavLink} to="/register">
          Registration
        </Link>
      </li>
      <li>
        <Link className={css.authNavLink} to="/login">
          Login
        </Link>
      </li>
    </ul>
  );
};
