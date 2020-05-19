import React from "react";

import friendsData from "./FriendsData";

const Friends = () => {
  return (
    <div>
      <p>Friends -></p>
      {friendsData.map(friend => {
        return <h3>{friend.name}</h3>;
      })}
    </div>
  );
};

export default Friends;
