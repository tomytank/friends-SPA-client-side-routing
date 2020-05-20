import React from "react";
import { Link } from "react-router-dom";
import friendsData from "./FriendsData";

const FriendsList = () => {
  return (
    <div>
      <p>Friends -></p>

      {friendsData.map(friend => {
        return (
          <Link to={`/friends/${friend.id}`}>
            <h3>{friend.name}</h3>
          </Link>
        );
      })}
    </div>
  );
};

export default FriendsList;
