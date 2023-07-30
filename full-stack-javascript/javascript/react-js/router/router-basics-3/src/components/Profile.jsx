import React from "react";
import { useParams } from "react-router-dom";
import Popeye from "./Popeye";
import Spinach from "./Spinach";
import DefaultProfile from "./DefaultProfile";

function Profile() {
  const { name } = useParams();
  return (
    <div>
      <h1>Profile Page</h1>
      <h3>profile visited here is:</h3>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
    </div>
  );
}

export default Profile;
