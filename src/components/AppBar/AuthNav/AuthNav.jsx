import { Link, useLocation } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  const location = useLocation();
  return (
    <ul className={css.authNavList}>
      <li>
        <Link
          className={`${css.authNavLink} ${
            location.pathname === '/register' && css.activeLink
          }`}
          to="/register"
        >
          Registration
        </Link>
      </li>
      <li>
        <Link
          className={`${css.authNavLink} ${
            location.pathname === '/login' && css.activeLink
          }`}
          to="/login"
        >
          Login
        </Link>
      </li>
    </ul>
  );
};
