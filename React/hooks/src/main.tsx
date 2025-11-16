import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ContactDetails from "./object";
import { TodoList } from "./todoList";

import { Greeting } from "./Exercises/greetingMsg";
import { InputMirror } from "./Exercises/inputMirror";
import { Counter } from "./Exercises/Counter";
import { ThemeToggle } from "./Exercises/themeToggle";
import { ProfileCard } from "./Exercises/profileCard";
import { FavMovieList } from "./Exercises/favMovieList";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ContactDetails />
    <TodoList />
    <Greeting />
    <InputMirror />
    <Counter />
    <ThemeToggle />
    <ProfileCard />
    <FavMovieList />
  </StrictMode>
);
