import React, { useState } from "react";
import Todo from "./Todo";

const TodoInput = () => {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		tasks.push(inputValue);
		setInputValue("");
	};

	return (
		<div className="container">
			<div className="row">
				<form className="col s12" onSubmit={handleSubmit}>
					<div className="row">
						<div className="input-field col s10">
							<input
								id="last_name"
								type="text"
								className="validate"
								value={inputValue}
								onChange={(e) => setInputValue(e.target.value)}
							/>
							<label
								htmlFor="last_name"
								className="active light-blue-text darken-4"
								style={{ fontWeight: "600", fontSize: "1.25rem" }}>
								Add your todo here
							</label>
						</div>
						<div className="col s2 center-align">
							<button
								className="btn waves-effect waves-light light-blue darken-1"
								type="submit">
								Submit
							</button>
						</div>
					</div>
				</form>
			</div>
			{tasks.length !== 0 && <Todo tasks={tasks} />}
		</div>
	);
};

export default TodoInput;

// Okay so task is appearing but constantly updating. How do I submit one task and move on to the next one??
