import { useSelector } from "react-redux";

import { Analytics } from "@vercel/analytics/react";

import Section from "../Section/Section";
import Container from "../Container/Container";
import Heading from "../Heading/Heading";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import Notification from "../Notification/Notification";

import "./App.css";

export default function App() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Section>
      <Container>
        <Heading title="Phonebook release with Redux" bottom tag={`h1`} />
        <ContactForm />
        <SearchBox />
        <div>{contacts.length === 0 && <Notification />}</div>
        <ContactList contacts={visibleContacts} />
        <Analytics />
      </Container>
    </Section>
  );
}
