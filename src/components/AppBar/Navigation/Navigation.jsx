import { Link, useLocation } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';

const Navigation = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <ul className={css.navigationList}>
        <li>
          <Link
            to="/"
            className={`${css.navigationLink} ${
              location.pathname === '/' && css.activeLink
            }`}
          >
            Home
          </Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link
              to="/contacts"
              className={`${css.navigationLink} ${
                location.pathname === '/contacts' && css.activeLink
              }`}
            >
              Contacts
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export { Navigation };
