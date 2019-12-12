import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from '../components/List';
import API from '../utils/API';

function Saved() {

  const [ dataState, setDataState ] = useState([]);
  useEffect(() => {
    API.serverAPI.getBooks().then(res => setDataState(res.data));
  }, [])

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
            {dataState.map((element) => <ListItem book={element} />)}
          </List>
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
