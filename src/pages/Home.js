import React, { useState } from "react";
import UserCard from "../components/UserCard";
import RepoCard from "../components/RepoCard";
import "./Home.css";
import Input from "antd/es/input/Input";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [username, setUsername] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `user?username=${username}`;
    console.log(path);
    navigate(path);
  };

  const handler = (event) => {
    setUsername(event.target.value);
  };
  console.log(username);
  return (
    <div className="Card">
      <div className="content">
        <h2> Enter Github Username</h2>
        <Input
          value={username}
          type="text"
          placeholder="Github Username"
          onChange={handler}
        ></Input>
        <Button className="submitBtn" type="primary" onClick={routeChange}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Home;
