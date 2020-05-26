import React from "react";
import { Link } from "react-router-dom";
import friendsData from "./FriendsData";

import "../styles.css";

const FriendsList = () => {
  return (
    <div>
      <p>Friends -></p>

      {friendsData.map(friend => {
        return (
          <div className="character-list-wrapper" key={friend.id}>
            <div className="router-link" key={friend.id}>
              <Link to={`/friends/${friend.id}`}>
                <div className="character-list-wrapper" key={friend.id}>
                  <h3>{friend.name}</h3>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
