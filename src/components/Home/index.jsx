import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { useOwnStore } from "../../zustand";

export const Home = () => {
  const { labs } = useOwnStore();

  return (
    <Box color={"white"}>
      <Text opacity={"80%"} fontWeight={"bold"} fontSize={"xl"}>
        Home
      </Text>
    </Box>
  );
};
