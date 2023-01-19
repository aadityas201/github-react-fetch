import React from "react";
import ReactPaginate from "react-paginate";
import { useState, useEffect } from "react";
import RepoCard from "./RepoCard";
import axios from "axios";
import "./Repos.css";
import ReuseLoader from "./Loader";

const Repos = (props) => {
  const [repoInfo, setRepoInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const username = props.data.username;
  let params = {
    username: username,
    page_number: 2,
  };

  useEffect(() => {
    const getRepos = async () => {
      const res = await fetch(
        `https://aadityas201.pythonanywhere.com/repos?username=${username}&page_number=1`
      );
      // console.log(Math.ceil(total/12));
      const data = await res.json();
      setRepoInfo(data);
      setLoading(false);
    };

    getRepos();
  }, []);

  const fetchComments = async (currentPage) => {
    const url = `https://aadityas201.pythonanywhere.com/repos?username=${props.data.username}&page_number=${currentPage}`;
    const res = await fetch(url);
    const data = await res.json();
    setRepoInfo(data);
  };
  const handlePageClick = async (data) => {
    // console.log(data.selected);

    let currentPage = data.selected + 1;

    fetchComments(currentPage);
  };
  //   console.log(repoInfo);
  return (
    <>
      {loading ? (
        <ReuseLoader />
      ) : (
        <div>
          <div className="RepoContainer">
            {repoInfo.map((repo) => {
              return <RepoCard repo={repo} username={username} />;
            })}
          </div>
          <div className="paginate">
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={props.data.pageCount}
              previousLabel="< previous"
              pageClassName={"page-item"}
              pageLinkClassName={"page-link"}
              previousClassName={"page-item"}
              previousLinkClassName={"page-link"}
              nextClassName={"page-item"}
              nextLinkClassName={"page-link"}
              breakLabel="..."
              breakClassName={"page-item"}
              breakLinkClassName="page-link"
              containerClassName={"pagination"}
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Repos;
