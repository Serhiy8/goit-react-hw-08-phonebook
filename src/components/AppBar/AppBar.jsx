import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthNav } from './AuthNav';
import { Navigation } from './Navigation';
import { UserMenu } from './UserMenu';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';
import css from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className={css.header}>
        <div className={css.AppBarContainer}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default AppBar;
