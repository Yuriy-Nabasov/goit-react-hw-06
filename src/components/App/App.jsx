import { useState, useEffect } from "react";
import Section from "../Section/Section";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import initialContacts from "../contactData.json";
import Notification from "../Notification/Notification";

import { Analytics } from "@vercel/analytics/react";

import "./App.css";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const savedData = localStorage.getItem("myContacts");
    return savedData ? JSON.parse(savedData) : initialContacts;
  });

  const [myFilter, setMyFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(myFilter.toLocaleLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("myContacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Section>
      <Container>
        <Heading title="Phonebook" bottom tag={`h1`} />
        <ContactForm onAdd={addContact} />
        <SearchBox value={myFilter} onFilter={setMyFilter} />
        <div>{contacts.length === 0 && <Notification />}</div>
        <ContactList contacts={visibleContacts} onDelete={deleteContact} />
        <Analytics />
      </Container>
    </Section>
  );
}
