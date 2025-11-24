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

// UseRef
import InputFocus from "./useRef/input.focus";
import { RenderCounter } from "./useRef/render.counter";
import { PrevValue } from "./useRef/prevValue";

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
    <hr />
    // UseRef
    <InputFocus />
    <RenderCounter />
    <PrevValue />
  </StrictMode>
);
