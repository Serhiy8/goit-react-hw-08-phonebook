import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import DeleteButton from 'Material-UI/deleteButton-ui';
import css from './ContactsListItems.module.css';

export const ContactsListItems = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <tr className={css.tableRow}>
      <td className={css.tableCell}>{name}</td>
      <td className={css.tableCell}>{number}</td>
      <td className={css.tableCell}>
        <DeleteButton onClick={handleDelete} />
      </td>
    </tr>
    // <li>
    //   <p>{name}</p>
    //   <p>{number}</p>
    // <DeleteButton onClick={handleDelete} />
    /* <button type="button" onClick={handleDelete}>
        delete
      </button> */
    /* </li> */
  );
};
