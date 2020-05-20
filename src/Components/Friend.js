import React from "react";
import friendsData from "./FriendsData";
import { useParams } from "react-router-dom";

export default function Friend() {
  // const Friend = () => {
  const params = useParams();
  // console.log("Params in Friend.js, ", params);
  const singleFriend = friendsData.find(
    thePerson => `${thePerson.id}` === params.id
  );
  // console.log("Friend.js says singleFriend is", singleFriend);
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
        <div>
          {singleFriend.specialAbilities.map(item => {
            return <h4 key={item}>{item}</h4>;
          })}
          <p />
        </div>
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
