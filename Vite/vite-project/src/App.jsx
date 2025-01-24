import React from "react";
// import { useState, useCallback, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import Login from"./components/Login"
import Profile from"./components/Profile"
import UserContextProvider from "./context/UserContextProvider";

function App(){

return(
  <UserContextProvider>
<Login />
<Profile />

</UserContextProvider >
)
}

export default App;