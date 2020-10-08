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
      {/* {user ? (`This is my : ${user.id} and my name is ${user.name}`) : ("Not Found") } */}
      {users.map((user1) => (
        <div className="user_container" style={{ alignItems: "center" }}>
          <ul
            className="item"
            style={{
              display: "flex",
              justifyContent: "space-around",
              color: "white",
            }}
          >
            <li style={{ listStyle: "none" }}>{user1.id}</li>
            <li style={{ listStyle: "none" }}>{user1.name}</li>
            <li style={{ listStyle: "none" }}>{user1.gender}</li>
          </ul>
        </div>
      ))}
      {document.write(params.id)}
    </div>
  );
};
export default Post;
