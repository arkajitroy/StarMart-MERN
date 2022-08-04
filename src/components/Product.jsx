import React from "react";
import styled from "styled-components";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";

// styled components

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e3fff6;
  position: relative;

  &:hover ${Info} {
    opacity: 1;
  }
`;
// other styled components

const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-weight: 300;
  position: absolute;
  font-weight: 300;
  z-index: 2;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  z-index: 2;
  object-fit: cover;
  border-radius: 0.8rem;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
`;

// main components
const Product = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Title>{item.title}</Title>
      <Info>
        <Icon>
          <ShoppingCartTwoToneIcon />
        </Icon>
        <Icon>
          <SearchRoundedIcon />
        </Icon>
        <Icon>
          <FavoriteRoundedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
