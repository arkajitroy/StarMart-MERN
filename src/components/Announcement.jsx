import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <div>
      <Container>50% Sale on the brand new products</Container>
    </div>
  );
};

export default Announcement;
