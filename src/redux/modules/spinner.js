import { UPDATE_SPINNER } from "../constants";
// ------------------------------------
// Actions
// ------------------------------------
export function updateSpinner(payload) {
	return {
		type: UPDATE_SPINNER,
		payload,
	};
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
	[UPDATE_SPINNER]: (state, action) => action.payload,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { show: false, message: "" };
export default function spinnerReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
