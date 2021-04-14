import { UPDATE_NOTIFICATION } from "../constants";
// ------------------------------------
// Actions
const initialState = {
	show: false,
	type: "info",
	message: "",
	description: "",
};
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
	[UPDATE_NOTIFICATION]: (state, action) => action.payload,
};

// ------------------------------------
// Reducer
// ------------------------------------

export default function notificationReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
