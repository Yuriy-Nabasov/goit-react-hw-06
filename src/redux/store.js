import { configureStore, createAction } from "@reduxjs/toolkit";
import initialContacts from "../components/contactData.json";

const initialState = {
  balance: {
    value: 0,
  },
  contacts: initialContacts,
};

const rootReducer = (state = initialState, action) => {
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
};

export const store = configureStore({
  reducer: rootReducer,
});

// const addNewContact = (value) => {
//   return {
//     type: "contacts/addNewContact",
//     payload: value,
//   };
// };

export const addNewContact = createAction("contacts/addNewContact");

// addNewContact({ id: "id-5", name: "James Born", number: "777-91-26" });

export const deleteAnyContact = createAction("contacts/deleteAnyContact");
