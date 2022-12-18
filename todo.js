const API_URL = "https://jsonplaceholder.typicode.com";

/**
 *
 * @param {*} limit optionaly set a limit on fetched todos DEFAULT is 20
 * @returns list of todo objects in the format
 * [
 *      {
 *          id: string,
 *          title: string,
 *          completed: string
 *      }
 * ]
 */
function getTodos(limit = 20) {
	return fetch(`${API_URL}/todos?limit=${limit}`)
		.then((res) => res.json)
		.then((jsonRes) => jsonRes)
		.catch((err) => {
			console.error(err);
			return [];
		});
}

/**
 *
 * @param todo - todo object or simple title string
 * @returns added todo
 */
function addTodo(todo) {
	let title = typeof todo === "object" ? todo.title : null;
	/**
	 * @desc incase todo is a simple text
	 */
	if (!title) title = todo;

	return fetch(`${API_URL}/todos`, {
		method: "POST",
	})
		.then((res) => res.json)
		.then((res) => res)
		.catch((err) => {
			console.error(err);
			return null;
		});
}

/**
 *
 * @param {*} todo
 * @returns completed todo or null if failed
 */
function markComplete(todo) {
	return fetch(`${API_URL}/todos/${todo.id}`, {
		method: "PATCH",
		body: {
			completed: true,
		},
	})
		.then((res) => res.json)
		.then((res) => res)
		.catch((err) => {
			console.error(err);
			return null;
		});
}
// !TODO unimplemented
function removeTodo() {}

module.exports = {
	getTodos,
	addTodo,
	markComplete,
	removeTodo,
};
