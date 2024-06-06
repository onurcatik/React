import React, { useEffect, useState, useCallback } from "react";
import UserProfile from "./UserProfile";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.slice(0,4)))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">User List</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <UserProfile key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;