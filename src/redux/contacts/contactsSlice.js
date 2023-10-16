import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operation';
import { toast } from 'react-toastify';

const initialState = {
  items: null,
  isLoading: false,
  error: null,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.isLoading = false;
        toast.success('Contact added!');
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        toast.warn('Contact not added!');
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(contact => {
          return contact.id === action.payload;
        });
        state.items.splice(index, 1);
        toast.success('Contact deleted!');
      })
      .addCase(deleteContact.rejected, (state, action) => {
        // state.error = action.error.message;
        toast.warn('Contact not deleted!');
      });
  },
});
