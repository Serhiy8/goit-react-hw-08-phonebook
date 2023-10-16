import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operation';
import DeleteButton from 'Material-UI/deleteButton-ui';
import css from './ContactsListItems.module.css';
import { useState } from 'react';

export const ContactsListItems = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    await dispatch(deleteContact(id));
    setIsLoading(false);
  };
  return (
    <tr className={css.tableRow}>
      <td className={css.tableCell}>{name}</td>
      <td className={css.tableCell}>{number}</td>
      <td className={css.tableCell}>
        {<DeleteButton onClick={handleDelete} disabled={isLoading} />}
      </td>
    </tr>
  );
};
