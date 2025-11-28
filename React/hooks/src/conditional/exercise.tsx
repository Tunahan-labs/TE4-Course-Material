import React from "react";

// exercise 1
type GreetingProps = {
  isLoggedIn: boolean;
};

export function GreetingComp({ isLoggedIn }: GreetingProps) {
  return <h1>{isLoggedIn ? "Welcome back!" : "Please log in."}</h1>;
}

// exercise 2
type StatusProps = {
  isOnline: boolean;
};

export function Status({ isOnline }: StatusProps) {
  return (
    <span style={{ color: isOnline ? "green" : "red" }}>
      {isOnline ? "Online" : "Offline"}
    </span>
  );
}

// exercise 3
type UserProps = {
  username: string;
  isAdmin: boolean;
};

export function User({ username, isAdmin }: UserProps) {
  return (
    <div>
      <h2>{username}</h2>
      {isAdmin && <span style={{ color: "blue" }}>Admin</span>}
    </div>
  );
}
