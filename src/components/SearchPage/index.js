import React from 'react';
import { useHistory } from "react-router-dom";
import {HomeContainer, Header, Form, Button, Input, RestContainer} from './Style';
import SearchIcon from '@material-ui/icons/Search';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function SearchPage() {
  const history = useHistory();

  const goToRestaurantPage = () => {
    history.push("/restaurant")
}

  return (
    <HomeContainer>
      <Header>
      <p onClick={goToRestaurantPage}><ArrowBackIosIcon /></p>
      </Header>
      <RestContainer>
        <Form>
        <Button><SearchIcon /></Button>
        <Input type="search" placeholder="Restaurante" />
        </Form>
        <p>Busque por nome de restaurante</p>
      </RestContainer>
    </HomeContainer>
  );
}

export default SearchPage;