import React, { memo } from "react";

const UserProfile = memo(({ user }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h3 className="text-lg font-bold">{user.name}</h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
});

export default UserProfile;
