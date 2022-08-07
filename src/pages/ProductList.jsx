import styled from "styled-components";
import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 12px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-size: 600;
`;

const Filter_Select = styled.select`
  padding: 10px;
  margin-left: 20px;
`;

const Sort_Select = styled.select`
  padding: 10px;
  margin-right: 10px;
`;

const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter</FilterText>
          <Filter_Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Red</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
          </Filter_Select>
          <Filter_Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
            <Option>XXL</Option>
          </Filter_Select>
        </Filter>
        <Filter>
          <FilterText>Sort By</FilterText>
          <Sort_Select>
            <Option disabled selected>
              Pricing
            </Option>
            <Option>Popularity</Option>
            <Option>High to Low</Option>
            <Option>Low to High</Option>
            <Option>Newest First</Option>
          </Sort_Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
