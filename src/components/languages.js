import { useState, useEffect } from "react";
import React from "react";
import { Button } from "antd";
import "./languages.css";

const Languages = (props) => {
  const [langs, setLanguages] = useState({});
  useEffect(() => {
    const getlangauges = async () => {
      const res = await fetch(
        `https://aadityas201.pythonanywhere.com/repos/languages?username=${props.username}&name=${props.reponame}`
      );
      // console.log(Math.ceil(total/12));
      const data = await res.json();
      setLanguages(data);
      // console.log(langs);
    };

    getlangauges();
  }, [props.username, props.reponame]);
  return (
    <div>
      {Object.keys(langs).map((lang) => {
        return (
          <Button type="primary" className="tags">
            {lang}
          </Button>
        );
      })}
    </div>
  );
};

export default Languages;
