import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  Stack,
  UnorderedList,
  ListItem,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import axios from "axios";

export const Card1 = ({ type, data, setLabs }) => {
  const toast = useToast();

  const handleApproved = async () => {
    try {
      await axios.post(
        `${process.env.REACT_APP_SERVER}/labs/approve/${data._id}`,
        {}
      );
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER}/getAllResponses`
      );

      setLabs(response.data);
      toast({
        title: "Lab Approved",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleDeline = async () => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER}/labs/delete/${data._id}`
    );
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER}/getAllResponses`
    );
    console.log(response.response);
    setLabs(response.response);
  };

  return (
    <>
      {type === "unapproved" ? (
        <Card maxW={["md", "sm"]} width={["md"]} cursor={"default"}>
          <CardBody>
            <Stack
              mt="6"
              spacing="3"
              sx={{
                textAlign: "start",
                alignItems: "flex-start",
              }}
            >
              <Heading size="xl">{data.labName}</Heading>
              <UnorderedList>
                <ListItem>Owner Name:- {data.name}</ListItem>
                <ListItem>Phone:- {data.phone}</ListItem>
                <ListItem>Email:- {data.email}</ListItem>
                <ListItem>
                  tests:-{" "}
                  {data?.tests?.map((e) => {
                    return `${e},`;
                  })}
                </ListItem>
                <ListItem>Sample capacity:- {data.sampleCapacity}</ListItem>
                <ListItem>Lab size:- {data.labSize} sqft.</ListItem>
                <ListItem>Landmark:- {data.landmark}</ListItem>
                <ListItem>Address:- {data.labAddress}</ListItem>
                <ListItem>City:- {data.city}</ListItem>
              </UnorderedList>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <motion.box whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Button
                  variant="solid"
                  colorScheme="green"
                  onClick={handleApproved}
                >
                  Approve
                </Button>
              </motion.box>
              <motion.box whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                <Button
                  variant="solid"
                  colorScheme="red"
                  onClick={handleDeline}
                >
                  Deline
                </Button>
              </motion.box>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ) : (
        <>
          <Card maxW="sm">
            <CardBody>
              <Stack
                mt="6"
                spacing="3"
                sx={{
                  textAlign: "start",
                  alignItems: "flex-start",
                }}
              >
                <Heading size="lg">{data.labName}</Heading>
                <UnorderedList>
                  <ListItem>Owner Name:- {data.name}</ListItem>
                  <ListItem>Phone:- {data.phone}</ListItem>
                  <ListItem>Email:- {data.email}</ListItem>
                  <ListItem>
                    tests:-{" "}
                    {data.tests.map((e) => {
                      return `${e},`;
                    })}
                  </ListItem>
                  <ListItem>Sample capacity:- {data.sampleCapacity}</ListItem>
                  <ListItem>Lab size:- {data.labSize} sqft.</ListItem>
                  <ListItem>Landmark:- {data.landmark}</ListItem>
                  <ListItem>Address:- {data.labAddress}</ListItem>
                  <ListItem>City:- {data.city}</ListItem>
                </UnorderedList>
              </Stack>
            </CardBody>
          </Card>
        </>
      )}
    </>
  );
};
