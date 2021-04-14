import { updateNotification } from "../actions/notification";
import { UPDATE_NOTIFICATION_API } from "../constants";
// -------------------- Get and Proccess All Services -----------------------------------------------------------------
export const NOTIFY = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === UPDATE_NOTIFICATION_API) {
		dispatch(updateNotification(action.payload));
	}
};
