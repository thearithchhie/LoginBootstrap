import React from "react";
import { useParams } from "react-router-dom";

const Post = () => {
  let params = useParams();
  console.log(params);
  const users = [
    {
      id: 1,
      name: "Mary",
      gender: "female",
    },
    {
      id: 2,
      name: "Dany",
      gender: "female",
    },

    {
      id: 3,
      name: "BunTha",
      gender: "Male",
    },
  ];
  const user = users.find((user) => user.id == params.id);
  //alert(user);
  return (
    <div className="post">
      <h1>Post</h1>
      {user ? (`This is my ID : ${user.id} and my name is ${user.name} after gender ${user.gender}`) : ("Not Found") }
    </div>
  );
};
export default Post;
