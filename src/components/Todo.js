import React from "react";

const Todo = (props) => {
	return (
		<ul className="collection">
			{props.tasks.map((task) => (
				<li className="collection-item">
					{task}
					<a href="#!">
						<i className="material-icons right">clear</i>
					</a>
				</li>
			))}
		</ul>
	);
};

export default Todo;
