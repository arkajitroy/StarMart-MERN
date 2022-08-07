import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius: 0.8rem;
`;

const Logo = styled.h1`
  text-align: center;
  font-size: 40px;
  font-weight: 500;
  color: teal;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border: 0.5px solid gray;
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

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Form>
          <Logo>Starmart</Logo>
          <Input placeholder="Username" />
          <Input placeholder="Password" />
          <Button>LOG IN</Button>
          <Link>Fogot Password?</Link>
          <Link>Create a new Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
