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

// Lists of Data
import UserCard from "./listsOfData/userCard";

// practice
import { Greetings } from "./practice/greeting";

// conditionals
import { GreetingComp } from "./conditional/exercise";
import { Status } from "./conditional/exercise";
import { User } from "./conditional/exercise";

// event handlers
import CustomButton from "./eventHandlers/custonButton";
import ToggleComponent from "./eventHandlers/toggleUI";
import "./eventHandlers/interactiveList";
import InteractiveList from "./eventHandlers/interactiveList";

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
    // Lists of Data
    <UserCard />
    <hr />
    // practice
    <Greetings />
    <hr />
    // conditionals
    <GreetingComp isLoggedIn={true} />
    <Status isOnline={true} />
    <User username="JohnDoe" isAdmin={true} />
    <hr />
    // event handlers
    <CustomButton onClick={() => alert("Button clicked!")} label="Click Me" />
    <ToggleComponent />
    <InteractiveList />
  </StrictMode>
);
