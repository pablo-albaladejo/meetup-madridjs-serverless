import React from "react";
import PropTypes from "prop-types";
import { Button, Table } from "semantic-ui-react";

const Header = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Address</Table.HeaderCell>
      <Table.HeaderCell>Phone</Table.HeaderCell>
      <Table.HeaderCell />
    </Table.Row>
  </Table.Header>
);

export const ContactTable = ({ data, onClick, isLoaded }) => {
  return (
    <Table celled>
      <Header />
      <Table.Body>
        {data.map(({ name, phone, address }, index) => (
          <Table.Row key={`${name}-${index}`}>
            <Table.Cell>{name}</Table.Cell>
            <Table.Cell>{address}</Table.Cell>
            <Table.Cell>{phone}</Table.Cell>
            <Table.Cell textAlign="center">
              <Button
                icon="call"
                color="green"
                onClick={() => onClick(phone)}
                disabled={!isLoaded}
              />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

ContactTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired
    }).isRequired
  ),
  onClick: PropTypes.func,
  isLoaded: PropTypes.bool.isRequired
};
