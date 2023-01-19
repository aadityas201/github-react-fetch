import { Col, Row } from "antd";
import profile from "../data";
import "./UserCard.css";
import { BsTwitter } from "react-icons/bs";

const UserCard = (props) => {
  console.log(props);
  return (
    <>
      <div className="container">
        <Row>
          {/* {console.log(profile[0].login)} */}
          <Col span={5}>
            <img src={props.user.avatar_url}></img>
          </Col>
          <Col>
            <h1>{props.user.username}</h1>
            <p>{props.user.bio}</p>
            <h6>{props.user.location}</h6>
            {props.user.twitter_username && (
              <div>
                <BsTwitter />
                <a
                  class="link-primary"
                  href={`https://twitter.com/${props.user.twitter_username}`}
                >
                  {props.user.twitter_username}
                </a>
              </div>
            )}
            <div>
              <a
                class="link-primary"
                href={`https://github.com/${props.user.username}`}
              >
                {`https://github.com/${props.user.username}`}
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default UserCard;
