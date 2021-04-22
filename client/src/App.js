import "./App.css";
import "semantic-ui-css/semantic.min.css";
import React from "react";
import { Container, Segment } from "semantic-ui-react";
import { Contacts } from "./components/Contacts/Contacts";
import usePhone from "./shared/hooks/use-phone";

// TODO introducir la URL de las lambdas en URL_AWS, no añadir " / " al final.
const URL_AWS = "";

function App() {
  const { isLoaded, loadPhone, callNumber } = usePhone();
  return (
    <Container>
      <Contacts
        loadPhone={loadPhone}
        callNumber={callNumber}
        isLoaded={isLoaded}
        url={URL_AWS}
      />
      {isLoaded && <Segment id="phone" textAlign="center" />}
    </Container>
  );
}

export default App;
