import { useEffect, useState, useRef } from "react";

const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const UserCard = () => {
  const [selectedUser, setSelectedUser] = useState<{
    id: number;
    name: string;
    age: number;
  } | null>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  const selectUser = (user: { id: number; name: string; age: number }) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.style.color = "blue";
    }
  }, [selectedUser]);

  return (
    <div>
      <h2>User Cards</h2>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            onClick={() => selectUser(user)}
            style={{ cursor: "pointer", margin: "5px 0" }}
          >
            {user.name}
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <h3 ref={nameRef}>{selectedUser.name}</h3>
          <p>Age: {selectedUser.age}</p>
        </div>
      )}
    </div>
  );
};

export default UserCard;
