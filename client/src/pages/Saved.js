import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from '../components/List';

function Saved() {

  const [ dataState, setDataState ] = useState([]);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Saved Books</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <List>
            {dataState.map((element) => <ListItem book={element.volumeInfo} />)}
          </List>
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
