import React from "react";

interface UserType {
  name: string;
  id: number;
}

// Correct the typing of props here
interface UserCardProps {
  userData: UserType[];
}

const UserCard: React.FC<UserCardProps> = ({ userData }) => {
  console.log("userData in card", userData);
  return (
    <div>
      <h1>user data</h1>
      <ul>
        {userData &&
          userData.map((usr: UserType, i: number) => {
            // Add 'return' here to ensure the JSX is returned
            return <li key={i}>{usr.name}</li>;
          })}
      </ul>
    </div>
  );
};

export default UserCard;
