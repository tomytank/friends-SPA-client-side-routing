import React from "react";
import { Link } from "react-router-dom";
import friendsData from "./FriendsData";

const FriendsList = () => {
  return (
    <div>
      <p>Friends -></p>

      {friendsData.map(friend => {
        return (
          <div className="character-list-wrapper" key={friend.id}>
            <Link to={`/friends/${friend.id}`}>
              <div className="" key={friend.id}>
                <h3>{friend.name}</h3>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
