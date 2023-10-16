import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from 'redux/auth/auth-selectors';
import { logOut } from 'redux/auth/auth-operation';
import { stringAvatar } from 'Material-UI/userMenu-ui';
import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import css from './userMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  if (!user.name) {
    return;
  }

  return (
    <div className={css.userMenuContainer}>
      <Avatar {...stringAvatar(user.name)} />
      <p> {user.email}</p>
      <Button
        variant="contained"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Log out
      </Button>
    </div>
  );
};

export { UserMenu };
