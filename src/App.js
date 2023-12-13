import "./App.css";
import { Box, Flex, Spinner, useToast } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Approved } from "./components/Approved";
import { UnApproved } from "./components/UnApproved";
import { Login } from "./components/Login";
import { useEffect, useState } from "react";
import Protected from "./components/Protected";
import axios from "axios";
import { useOwnStore } from "./zustand";

function App() {
  const [user, setUser] = useState("");
  const { setLabs } = useOwnStore();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  useEffect(() => {
    setUser(localStorage.getItem("user"));
    console.log("calling in app component");
    console.log(user);
  });

  useEffect(() => {
    setLoading(true);
    const fetchLabs = async () => {
      try {
        const labs = await axios.get(
          `${process.env.REACT_APP_SERVER}/getAllResponses`
        );
        console.log("logging all lab responses data",labs.data);
        setLabs(labs.data);
      } catch (error) {
        toast({
          title: error.message,
          status: "error",
          duration: 9000,
          isClosable: true,
        });
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchLabs();
    console.log("fetching all labs in the app");
  }, []);
  return (
    <Flex
      className="App"
      sx={{
        display: "flex",
        height: "100vh",
        flexDir: "column",
        width: "100vw",
        height: "100vh",
        justifyContent: "space",
        alignItems: "center",
        background: "#282c34",
        overflowX: "hidden",
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route
              path="/approved"
              element={
                <Protected user={user}>
                  {loading ? (
                    <Box
                      sx={{
                        width: "100vw",
                        height: "90vh",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="teal.500"
                        size="xl"
                      />
                    </Box>
                  ) : (
                    <Approved user={user} />
                  )}
                </Protected>
              }
            />
            <Route
              path="/unapproved"
              element={
                <Protected user={user}>
                  {loading ? (
                    <Box
                      sx={{
                        width: "100vw",
                        height: "90vh",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="teal.500"
                        size="xl"
                      />
                    </Box>
                  ) : (
                    <UnApproved user={user} />
                  )}
                </Protected>
              }
            />
            <Route
              path="/login"
              element={<Login user={user} setUser={setUser} />}
            />
          </Route>
        </Routes>
      </Router>
    </Flex>
  );
}

export default App;
