import React from "react";

function SpecialAbilities(props) {
  console.log(props);
  return (
    <div>
      {props.singleFriend.specialAbilities.map(item => {
        return <h4 key={item}>{item}</h4>;
      })}

      {/* <p className="item-description">{props.specialAbilities}</p> */}
    </div>
  );
}

export default SpecialAbilities;
