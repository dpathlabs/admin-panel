import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { LoginForm } from "./LoginForm";

export const Login = ({setUser}) => {
  return (
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        height: "80vh",
}}>
      <Heading color={'white'} fontSize={'xl'}>Login</Heading>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        marginTop: "10px",
        justifyContent:'center',
        alignItems: 'center'
      }}>
        <LoginForm  setUser={setUser}/>
      </Box>
    </Box>
  );
};
