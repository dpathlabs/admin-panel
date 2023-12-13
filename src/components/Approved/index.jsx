import React, { useEffect } from "react";
import { Box, Grid, Text, GridItem } from "@chakra-ui/react";
import { Card1 } from "../Cart";
import { useOwnStore } from "../../zustand";
import { motion } from "framer-motion";
import axios from "axios";

export const Approved = () => {
  const { labs } = useOwnStore();

  return (
    <Box color={"white"} marginTop={10}>
      <Text opacity={"80%"} fontWeight={"bold"} fontSize={"3xl"}>
        Approved Labs
      </Text>
      <Grid
        templateColumns="repeat(auto-fill, minmax(250px, 400px))"
        spacing={"4"}
        justifyContent="center"
        gap={6}
        mt={5}
      >
        {labs?.map((lab, key) => {
          if (!lab?.isApproved) {
            return null;
          }
          return (
            <GridItem key={key}>
              <Card1 data={lab} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
