import axios from "axios";
import { API_REQUEST } from "../constants";

// this middleware care only for API calls
export const API = ({ dispatch }) => (next) => (action) => {
	if (action.type === API_REQUEST) {
		const { payload } = action;

		const { method, url, onSuccess, onError } = action.meta;
		const id = method === "DELETE" ? payload.id : null;
		axios({
			method,
			url,
			data: payload,
		})
			.then((res) => {
				dispatch({ type: onSuccess, payload: res.data, deleteId: id });
			})
			.catch((error) => {
				console.error(error);
				dispatch({
					type: onError,
					payload: {
						type: "error",
						message: error.name,
						description: error.message,
					},
				});
			});
	}
	return next(action);
};
