import React from "react";
import friendsData from "./FriendsData";
import { useParams, useRouteMatch, NavLink, Route } from "react-router-dom";

import SpecialAbilities from "./SpecialAbilities";

export default function Friend() {
  const params = useParams();
  const { path, url } = useRouteMatch();
  console.log("path in friend.js ", path);
  console.log("url in friend.js ", url);
  console.log("Params in Friend.js, ", params);
  const singleFriend = friendsData.find(
    thePerson => `${thePerson.id}` === params.id
  );
  return (
    <div key={singleFriend.id} className="characters-list-wrapper">
      <div className="character-card" key={singleFriend.id}>
        <h1>{singleFriend.name}</h1>
        <h2>({singleFriend.nickname})</h2>
        <p />
        <h3>{singleFriend.description}</h3>
        <p />
        <h3>Typical quote: "{singleFriend.quote}"</h3>
        <h3>Special Abilities:</h3>
        <nav className="nav-buttons">
          <button>
            <NavLink
              className="remove-underline"
              to={`${url}/special-abilities`}
            >
              Speical Abilities
            </NavLink>
          </button>
        </nav>
        <Route path={`${path}/special-abilities`}>
          <SpecialAbilities singleFriend={singleFriend} />
          <p />
        </Route>
        {/* </nav> */}
      </div>
    </div>
  );
}

// export default Friend;

// id: 1,
//     name: "Roger McCarey",
//     nickname: "Roger the Dodge",
//     description: "Creative. Helpful. Sarcastic.",
//     quote: "All the little dots...",
//     specialAbilities: ["Persistance", "Determined", "Spending thrift"]
