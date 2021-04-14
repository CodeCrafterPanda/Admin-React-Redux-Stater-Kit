import { UPDATE_NOTIFICATION } from "../constants";
// ------------------------------------
// Async Actions
// ------------------------------------

export const updateNotification = (notification) => {
	return {
		type: UPDATE_NOTIFICATION,
		payload: {
			show: true,
			...notification,
		},
	};
};
