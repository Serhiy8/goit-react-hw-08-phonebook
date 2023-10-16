// import { ContactsListItems } from 'components/ContactsListItem/ContactsListItems';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';
import { selectContacts } from 'redux/contacts/selectors';
// import css from './ContactsList.module.css';
import { selectUser } from 'redux/auth/auth-selectors';
import ContactsListLayout from './ContactsListLayout';
import FilterByName from 'components/Filter/Filter';
import { selectFilterValue } from 'redux/filter/selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectContacts);
  const user = useSelector(selectUser);
  const filterValue = useSelector(selectFilterValue);

  const visibleContacts = () => {
    const normalizedFilter = filterValue.toLowerCase();
    if (!data) {
      return;
    }
    return data.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  const contactsForRender = visibleContacts();

  useEffect(() => {
    user.name && dispatch(fetchContacts());
  }, [dispatch, user.name]);

  return (
    <div className="container">
      {data &&
        (data.length === 0 ? (
          <h2 style={{ textAlign: 'center' }}>No contacts in the list</h2>
        ) : (
          <>
            <FilterByName />
            <ContactsListLayout data={contactsForRender} />
          </>
        ))}
      {/* <ul>
        {data ? (
          data.map(({ id, name, number }) => (
            <ContactsListItems key={id} id={id} name={name} number={number} />
          ))
        ) : (
          <h2>No contacts in the list</h2>
        )}
      </ul> */}
    </div>
  );
};

export default ContactsList;
