import React from "react";
import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";

function App() {
	return (
		<div className="App">
			<Header />
			<TodoInput />
		</div>
	);
}

export default App;
