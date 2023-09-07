import React from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";
export const Layout = ({ user, setUser }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDir: "column",
        justifyContent: "center",
        width: "90%",
      }}
    >
      <Flex
        gap={10}
        sx={{
          justifyContent: "center",
          p: 5,
        }}
      >
        <Text
          sx={{
            display: "flex",
            color: "white",
            opacity: "50%",
            cursor: "pointer",
            transition: "all 300ms",
          }}
          _hover={{
            opacity: "90%",
          }}
          onClick={() => navigate("/")}
        >
          Home
        </Text>

        <Text
          sx={{
            display: "flex",
            color: "white",
            opacity: "50%",
            cursor: "pointer",
            transition: "all 300ms",
          }}
          _hover={{
            opacity: "90%",
          }}
          onClick={() => navigate("/unapproved")}
        >
          Unapproved Labs
        </Text>

        <Text
          sx={{
            display: "flex",
            color: "white",
            opacity: "50%",
            cursor: "pointer",
            transition: "all 300ms",
          }}
          _hover={{
            opacity: "90%",
          }}
          onClick={() => navigate("/approved")}
        >
          Approved Labs
        </Text>
        {user === null ? (
          <Text
            sx={{
              display: "flex",
              color: "white",
              opacity: "50%",
              cursor: "pointer",
              transition: "all 300ms",
            }}
            _hover={{
              opacity: "90%",
            }}
            onClick={() => navigate("/login")}
          >
            Login
          </Text>
        ) : (
          <Text
            sx={{
              display: "flex",
              color: "white",
              opacity: "50%",
              cursor: "pointer",
              transition: "all 300ms",
            }}
            _hover={{
              opacity: "90%",
            }}
            onClick={()=>{
              localStorage.clear()
              setUser(null)
              navigate("/login")
            }}
          >
            Logout
          </Text>
        )}
      </Flex>
      <Outlet />
    </Box>
  );
};
