import ContactsList from 'components/ContactsList/ContactsList';
import FormAddContact from 'components/FormAddContact/FormAddContact';

const Contacts = () => {
  return (
    <>
      <FormAddContact />
      <ContactsList />
    </>
  );
};

export default Contacts;
