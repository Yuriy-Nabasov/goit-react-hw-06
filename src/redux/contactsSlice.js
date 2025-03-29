import { createAction } from "@reduxjs/toolkit";
import initialContacts from "../components/contactData.json";

export const addNewContact = createAction("contacts/addNewContact");

export const deleteAnyContact = createAction("contacts/deleteAnyContact");

const initialState = {
  contacts: initialContacts,
};

export default function contactsSliceReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case "contacts/addNewContact":
      return { ...state, contacts: [...state.contacts, action.payload] };
    case "contacts/deleteAnyContact":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
}
