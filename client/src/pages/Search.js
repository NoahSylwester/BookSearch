import React, { useState } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from '../components/List';
import { Input, SubmitButton } from '../components/SearchForm';
import API from '../utils/API';

function Search() {
    
    const [ queryState, setQueryState ] = useState('');
    const [ dataState, setDataState ] = useState([]);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Google Books Search</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Input onChange={event => setQueryState(event.target.value)} value={queryState} />
          <SubmitButton onClick={() => API.googleAPI.getBooks(queryState).then(res => setDataState(res.data.items))}>
              Search for books
          </SubmitButton>
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

export default Search;