import "./App.css";
import { useState, useEffect } from "react";

function App() {
  type User = {
    id: number;
    name: string;
    isOnline: boolean;
  };

  const initialUsers: User[] = [
    { id: 1, name: "Judy", isOnline: true },
    { id: 2, name: "Charlie", isOnline: false },
    { id: 3, name: "Bob", isOnline: true },
    { id: 4, name: "Ivan", isOnline: false },
    { id: 5, name: "Heidi", isOnline: true },
    { id: 6, name: "Grace", isOnline: false },
    { id: 7, name: "Frank", isOnline: true },
    { id: 8, name: "Eve", isOnline: false },
    { id: 9, name: "David", isOnline: true },
    { id: 10, name: "Alice", isOnline: false },
  ];
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (!query) {
      setUsers(initialUsers);
      return;
    }
  }, [query]);

  const match = (item: string, query: string) => {
    return item.toLowerCase().includes(query.toLowerCase());
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    if (!query) {
      setUsers(initialUsers);
      return;
    }
    const online = users.filter((user) => user.isOnline);
    const filteredUsers = online.filter((user) => {
      return match(user.name, query);
    });
    setUsers(filteredUsers);
  };
  return (
    <>
      <div>
        <h1>Online Users:</h1>
        <input
          type="text"
          placeholder="Search online users..."
          value={query}
          onChange={handleSearch}
        />
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} {user.isOnline ? "(Online)" : "(Offline)"}
            </li>
          ))}
        </ul>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
}

export default App;
