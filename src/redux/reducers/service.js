import { UPDATE_SERVICES } from "../constants";
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
	[UPDATE_SERVICES]: (state, action) => {
		return { ...state, ...action.payload };
	},
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
	createServiceDrawer: false,
	updateServiceDrawer: false,
	readServiceDrawer: false,
	services: [],
	selectedService: null,
};
export default function serviceReducer(state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type];
	return handler ? handler(state, action) : state;
}
