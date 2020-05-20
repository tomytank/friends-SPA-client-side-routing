import React from "react";
import friendsData from "./FriendsData";
import { useParams } from "react-router-dom";

const Friend = () => {
  const singleFriend = useParams();
  console.log("Params in Friend.js, ", singleFriend);
  return (
    <div>
      <p>Friend List->single Friend Test`${singleFriend}`</p>
    </div>
  );
};

export default Friend;
