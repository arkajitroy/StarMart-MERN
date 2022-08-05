import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

const Container = styled.div`
  display: flex;
`;
// sections of the footer
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

// FOOTER ELEMENTS
const Logo = styled.h1`
  color: teal;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;

// ITEMS LIST
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItems = styled.li`
  width: 50%;
  margin-bottom: 7px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img``;

// SOCIAL ICONS CONTAINER
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 7px;
`;

// Main Component
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>STARMART</Logo>
        <Desc>
          Starmart is the onestop solution for all the buyers out there.
          Specially those who are very intersted trying new and mordern
          designing cloths
        </Desc>
        <SocialContainer>
          {/* FACEBOOK */}
          <SocialIcon color="#4e4eba">
            <FacebookIcon />
          </SocialIcon>
          {/* INSTA */}
          <SocialIcon color="#eb159c">
            <InstagramIcon />
          </SocialIcon>
          {/* TWITTER */}
          <SocialIcon color="#21a3ff">
            <TwitterIcon />
          </SocialIcon>
          {/* PINTEREST */}
          <SocialIcon color="#d40000">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItems>Home</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Men's Fashion</ListItems>
          <ListItems>Women's Fashion</ListItems>
          <ListItems>Accessories</ListItems>
          <ListItems>My Account</ListItems>
          <ListItems>Order Tracking</ListItems>
          <ListItems>Wishlist</ListItems>
          <ListItems>Cart</ListItems>
          <ListItems>Terms and Condition</ListItems>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocalPhoneIcon />
          +91 9875 6568 96
        </ContactItem>
        <ContactItem>
          <LocationOnIcon />
          123, Plazza Building, DH Road Kolkata, WestBengal 700005
        </ContactItem>
        <ContactItem>
          <EmailIcon />
          contact@starmart.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
