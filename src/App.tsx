import React from "react";
import "./App.css";

function App() {
  return <div></div>;
}

function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>{props.name}프로필 입니다</div>;
}

export default App;
