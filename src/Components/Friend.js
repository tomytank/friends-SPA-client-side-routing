import React from "react";
import friendsData from "./FriendsData";
import { useParams } from "react-router-dom";

export default function Friend() {
  // const Friend = () => {
  const singleFriend = useParams();
  console.log("Params in Friend.js, ", singleFriend);
  return (
    <div>
      <p>Friend List->single Friend Test`${singleFriend}`</p>
    </div>
  );
}

// export default Friend;
