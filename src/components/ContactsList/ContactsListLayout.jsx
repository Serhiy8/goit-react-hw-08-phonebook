import css from './ContactsList.module.css';
import { ContactsListItems } from 'components/ContactsListItem/ContactsListItems';

const ContactsListLayout = ({ data }) => {
  return (
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
          <ContactsListItems key={id} id={id} name={name} number={number} />
        ))}
      </tbody>
    </table>
  );
};

export default ContactsListLayout;
