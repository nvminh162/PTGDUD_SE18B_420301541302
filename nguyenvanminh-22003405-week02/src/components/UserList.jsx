import { use } from "react";

function UserList({ users }) {
  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <hr />
          <div>User name: {user.name}</div>
          <div>User age: {user.age}</div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
