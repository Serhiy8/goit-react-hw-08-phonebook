import { ContactsListItems } from 'components/ContactsListItem/ContactsListItems';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';
import { selectContacts } from 'redux/contacts/selectors';
import css from './ContactsList.module.css';
import { selectUser } from 'redux/auth/auth-selectors';

const ContactsList = () => {
  const dispatch = useDispatch();
  let data = useSelector(selectContacts);
  const user = useSelector(selectUser);

  // if (data && data.length === 0) {
  //   data = null;
  // }

  useEffect(() => {
    user.name && dispatch(fetchContacts());
  }, [dispatch, user.name]);

  return (
    <div className="container">
      {data &&
        (data.length === 0 ? (
          <h2 style={{ textAlign: 'center' }}>No contacts in the list</h2>
        ) : (
          <table className={css.tableContacts}>
            <thead className={css.tableThead}>
              <tr>
                <th className={css.tableCell}>Name</th>
                <th className={css.tableCell}>Phone Number</th>
                <th className={css.tableCell}>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map(({ id, name, number }) => (
                <ContactsListItems
                  key={id}
                  id={id}
                  name={name}
                  number={number}
                />
              ))}
            </tbody>
          </table>
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
