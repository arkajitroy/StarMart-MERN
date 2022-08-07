import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImgContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  border-radius: 1rem;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;
const Title = styled.h1`
  font-weight: 400;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-weight: 200;
`;
const Price = styled.span`
  font-weight: 200;
  font-size: 30px;
`;

// Filter Container
const FilterContainer = styled.div`
  display: flex;
  width: 70%;
  margin: 30px 0px;
  justify-content: space-between;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;
const FilterSize = styled.select`
  margin: 10px;
  padding: 10px;
`;
const FilterSizeOption = styled.option``;

const FitlerColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

// Amount Container
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const AddContainer = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-container: space-between;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 0;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: 0.7s all ease;
  border-radius: 7rem;

  &:hover {
    background-color: black;
    color: white;
  }
`;

// Main Component
const ProductDetails = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jacket</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquam
            veritatis possimus officia placeat minima deleniti iste
            voluptatibus! Repellendus tempore, velit nobis deserunt vel vero ab
            ad illo ullam assumenda.
          </Desc>
          <Price>₹ 500</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FitlerColor color="black" />
              <FitlerColor color="blue" />
              <FitlerColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
                <FilterSizeOption>XXL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <RemoveIcon />
              <Amount>1</Amount>
              <AddIcon />
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductDetails;
