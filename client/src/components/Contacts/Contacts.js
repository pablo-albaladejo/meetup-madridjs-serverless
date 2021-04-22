import { useState } from "react";
import PropTypes from "prop-types";
import fetchData from "../../shared/api";
import {
  Button,
  Dimmer,
  Header,
  Input,
  Loader,
  Segment
} from "semantic-ui-react";
import ContactTable from "../ContactTable";

export const Contacts = ({ loadPhone, callNumber, isLoaded, url }) => {
  const [search, setSearch] = useState("");
  const [contacts, setContacts] = useState([]);
  const [contactByName, setContactsByName] = useState([]);
  const [loading, setLoading] = useState(false);

  const getContacts = async () => {
    setLoading(true);
    const allContacts = await fetchData(url);
    setContacts(allContacts);
    setLoading(false);
  };

  const getContactByName = async () => {
    setLoading(true);
    const contact = await fetchData(`${url}/${search}`);
    setContactsByName(contact);
    setLoading(false);
  };

  if (loading) {
    return (
      <Dimmer active>
        <Loader>Loading...</Loader>
      </Dimmer>
    );
  }

  return (
    <div>
      <Segment textAlign="center">
        <Input>
          <Input
            placeholder="Search by name..."
            onChange={e => setSearch(e.target.value)}
          />
          <Button onClick={() => getContactByName()} disabled={!search.length}>
            Search
          </Button>
        </Input>
        <Button content="Contacts" onClick={() => getContacts()} />
        <Button content="Show Phone" onClick={() => loadPhone()} />
      </Segment>
      {!!contacts.length && (
        <>
          <Header as="h4" content="All Contacts" />
          <ContactTable
            data={contacts}
            onClick={callNumber}
            isLoaded={isLoaded}
          />
        </>
      )}
      {!!contactByName.length && (
        <>
          <Header as="h4" content="Contacts by name" />
          <ContactTable
            data={contactByName}
            onClick={callNumber}
            isLoaded={isLoaded}
          />
        </>
      )}
    </div>
  );
};

Contacts.propTypes = {
  loadPhone: PropTypes.func.isRequired,
  callNumber: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  isLoaded: PropTypes.bool.isRequired
};
