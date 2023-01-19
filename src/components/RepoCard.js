import React from "react";
import { Button, Col } from "antd";
import "./RepoCard.css";
import Languages from "./languages";
const RepoCard = (props) => {
  return (
    <Col sm={10} className="Repocard">
      <h3>
        <a href={props.repo.html_url}> {props.repo.name}</a>
      </h3>
      <p>{props.repo.description}</p>
      <Languages username={props.username} reponame={props.repo.name} />
    </Col>
  );
};

export default RepoCard;
