import { Navigate, Route, Routes } from 'react-router-dom';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Contacts from 'pages/Contacts';
import AppBar from './AppBar/AppBar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/auth-operation';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import Home from 'pages/Home';

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<AppBar />}>
        <Route index element={<Home />} />
        (
        <Route
          path="/contacts"
          element={isLoggedIn ? <Contacts /> : <Navigate to="/login" />}
        />
        )
        <Route
          path="/register"
          element={isLoggedIn ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
      </Route>
    </Routes>
  );
};
