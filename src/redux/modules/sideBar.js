import { TOGGLE_SIDEBAR } from "../constants";
// ------------------------------------
// Actions
// ------------------------------------
export function toggleSidebar() {
	return {
		type: TOGGLE_SIDEBAR,
	};
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
	[TOGGLE_SIDEBAR]: (state, action) => !state,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false;
export default function sideBarReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
