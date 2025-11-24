import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// UseState
import { Greeting } from "./useState/exercise1/greetingMsg";
import { InputMirror } from "./useState/exercise1/inputMirror";
import { Counter } from "./useState/exercise1/counter";
import { ThemeToggle } from "./useState/exercise1/themeToggle";
import { ProfileCard } from "./useState/exercise1/profileCard";
import { FavMovieList } from "./useState/exercise1/favMovieList";

//UseEffect
import UserList from "./useEffect/exercise2/taskDescription";

// UseRef
import InputFocus from "./useRef/exercise3/input.focus";
import { RenderCounter } from "./useRef/render.counter";
import { PrevValue } from "./useRef/prevValue";

// Render Application
import UserCard from "./comp/userCard";

// practice
import { Greetings } from "./practice/greeting";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    // UseState
    <Greeting />
    <InputMirror />
    <Counter />
    <ThemeToggle />
    <ProfileCard />
    <FavMovieList />
    <hr />
    //UseEffect
    <UserList />
    <hr />
    // UseRef
    <InputFocus />
    <RenderCounter />
    <PrevValue />
    <hr />
    // Render Application
    <UserCard />
    <hr />
    // practice
    <Greetings />
  </StrictMode>
);
