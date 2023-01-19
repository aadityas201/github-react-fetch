import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import UserCard from "../components/UserCard";
import ReuseLoader from "../components/Loader";
import Repos from "../components/Repos";
import Error from "./Error";

const User = () => {
  const [params] = useSearchParams();
  const username = params.get("username");
  const [userInfo, setUserInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, SetError] = useState(false);

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const getComments = async () => {
      // console.log("1");
      setLoading(true);
      SetError(false);
      const url = `https://aadityas201.pythonanywhere.com/user?username=${username}`;
      const res = await fetch(url);
      const data = await res.json();
      if (res.status === 400) {
        // console.log("Hello");

        SetError(true);
        setLoading(false);
      } else {
        // console.log("21");
        const total = data.total_repos;
        setPageCount(Math.ceil(total / 10));

        setUserInfo(data);
        setLoading(false);
      }
    };
    getComments();
  }, [username]);
  let data = {
    username: username,
    pageCount: pageCount,
  };
  return (
    <div>
      {loading ? (
        <ReuseLoader />
      ) : error ? (
        <h1>Invalid Username</h1>
      ) : (
        <div>
          <UserCard user={userInfo} />
          <Repos data={data} />
        </div>
      )}
    </div>
  );
};

export default User;
