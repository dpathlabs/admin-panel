import "./App.css";
import { Flex } from "@chakra-ui/react";
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

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  useEffect(() => {
    const fetchLabs = async () => {
      const labs = await axios.get(
        `${process.env.REACT_APP_SERVER}/getAllResponses`
      );
      setLabs(labs.data);
    };
    fetchLabs();
  }, []);
  return (
    <Flex
      className="App"
      sx={{
        display: "flex",
        height: "100vh",
        flexDir: "column",
        width: "100vw",
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
              path="/"
              element={
                <Protected user={user}>
                  <Home user={user} />
                </Protected>
              }
            />
            <Route
              path="/approved"
              element={
                <Protected user={user}>
                  <Approved user={user} />
                </Protected>
              }
            />
            <Route
              path="/unapproved"
              element={
                <Protected user={user}>
                  <UnApproved user={user} />
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
