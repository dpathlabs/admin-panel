import React, { useEffect } from "react";
import { Box, Grid, Text, GridItem } from "@chakra-ui/react";
import { Card1 } from "../Cart";
import { useOwnStore } from "../../zustand";
import { motion } from "framer-motion";
import axios from "axios";

export const UnApproved = () => {
  const { labs, setLabs } = useOwnStore();

  return (
    <Box color={"white"} marginTop={10}>
      <Text opacity={"80%"} fontWeight={"bold"} fontSize={"3xl"}>
        UnApproved Labs
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={6} mt={5}>
        {labs?.map((lab, key) => {
          if (lab.isApproved) {
            return null;
          }
          return (
            <GridItem key={key}>
              <Card1 type="unapproved" data={lab} setLabs={setLabs} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
