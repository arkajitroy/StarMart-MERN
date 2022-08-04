import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { sliderItems } from "../data";

const Container = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

// styled components
const Arrow = styled.div`
  width: 55px;
  height: 55px;
  background-color: #bbede0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.7;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.bg};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  line-height: 1rem;
`;

const Title = styled.h1`
  font-size: 50px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  height: 3rem;
  width: 7rem;
  border: 0px;
  padding: 8px;
  font-size: 15px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

// main component
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  // sliding click handler
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div>
      <Container>
        <Arrow direction="left" onClick={() => handleClick("left")}>
          <ArrowBackIosOutlinedIcon fontSize="small" />
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
          {/* slides */}
          {sliderItems.map((item) => (
            <Slide bg={item.bg} key={item.id}>
              <ImageContainer>
                <Image src={item.image} />
              </ImageContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.desc}</Description>
                <Button>Shop Now</Button>
              </InfoContainer>
            </Slide>
          ))}
        </Wrapper>

        <Arrow direction="right" onClick={() => handleClick("right")}>
          <ArrowForwardIosOutlinedIcon fontSize="small" />
        </Arrow>
      </Container>
    </div>
  );
};

export default Slider;
