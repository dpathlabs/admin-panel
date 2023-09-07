import { Box, Input, Button } from "@chakra-ui/react";
import React from "react";
import {  useNavigate } from "react-router-dom";

export const LoginForm = ({setUser}) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(process.env.REACT_APP_EMAIL_ADMIN);
    if (
      email === process.env.REACT_APP_EMAIL_ADMIN &&
      password === process.env.REACT_APP_PASSWORD
    ) {
      localStorage.setItem('user', JSON.stringify(email));
      setUser(email)
      navigate("/")
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        bgColor: "#171923",
        marginTop: "30px",
        width: "35%",
        borderRadius: "10px",
        padding: "10",
        border: "1px solid gray",
        gap: "5",
      }}

    >      <Input
        placeholder="Enter Email"
        size={"lg"}
        _active={{
          border: "1px solid gray",
          outline: "1px solid gray",
        }}
        _hover={{}}
        color={"white"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Enter Password"
        size={"lg"}
        type="password"
        _active={{
          border: "1px solid gray",
          outline: "1px solid gray",
        }}
        _hover={{}}
        color={"white"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button width={"20%"} onClick={handleSubmit}>
        Login
      </Button>
    </Box>
  );
};
