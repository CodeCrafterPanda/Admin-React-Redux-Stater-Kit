import {
	apiRequest,
	updateNotification,
	updateServices,
	updateSpinner,
} from "../actions";
import {
	closeCreateServiceDrawer,
	closeUpdateServiceDrawer,
} from "../actions/service";
import {
	CREATE_SERVICE,
	CREATE_SERVICE_SUCCESS,
	DELETE_SERVICE,
	DELETE_SERVICE_SUCCESS,
	GET_SERVICE,
	GET_SERVICES,
	GET_SERVICES_SUCCESS,
	GET_SERVICE_SUCCESS,
	UPDATE_NOTIFICATION_API,
	UPDATE_SERVICE,
	UPDATE_SERVICE_SUCCESS,
} from "../constants";

const URL = "https://jsonplaceholder.typicode.com/posts";

// -------------------- Get and Proccess All Services -----------------------------------------------------------------
export const getServicesFlow = ({ dispatch }) => (next) => (action) => {
	next(action);
	if (action.type === GET_SERVICES) {
		dispatch(updateSpinner({ show: true, message: "Loading Services . . . " }));
		dispatch(
			apiRequest(
				"GET",
				URL,
				null,
				GET_SERVICES_SUCCESS,
				UPDATE_NOTIFICATION_API
			)
		);
	}
	if (action.type === GET_SERVICE) {
		let newURL = `${URL}/${action.payload}`;
		dispatch(updateSpinner({ show: true, message: "Loading Service . . . " }));
		dispatch(
			apiRequest(
				"GET",
				newURL,
				null,
				GET_SERVICE_SUCCESS,
				UPDATE_NOTIFICATION_API
			)
		);
	}
	if (action.type === CREATE_SERVICE) {
		dispatch(
			updateSpinner({ show: true, message: "Creating New Service . . . " })
		);
		dispatch(
			apiRequest(
				"POST",
				URL,
				action.payload,
				CREATE_SERVICE_SUCCESS,
				UPDATE_NOTIFICATION_API
			)
		);
	}
	if (action.type === UPDATE_SERVICE) {
		let newURL = `${URL}/${action.payload.id}`;
		dispatch(updateSpinner({ show: true, message: "Updating Service . . . " }));
		dispatch(
			apiRequest(
				"PATCH",
				newURL,
				action.payload,
				UPDATE_SERVICE_SUCCESS,
				UPDATE_NOTIFICATION_API
			)
		);
	}
	if (action.type === DELETE_SERVICE) {
		let newURL = `${URL}/${action.payload.id}`;
		console.log("Id to delete", action.payload.id);
		dispatch(updateSpinner({ show: true, message: "Deleting Service . . . " }));
		dispatch(
			apiRequest(
				"DELETE",
				newURL,
				action.payload,
				DELETE_SERVICE_SUCCESS,
				UPDATE_NOTIFICATION_API
			)
		);
	}
};
export const processServicesFlow = ({ dispatch, getState }) => (next) => (
	action
) => {
	next(action);
	if (action.type === GET_SERVICES_SUCCESS) {
		dispatch(updateServices({ services: action.payload }));
		dispatch(updateSpinner({ show: false, message: "" }));
	}

	if (action.type === GET_SERVICE_SUCCESS) {
		dispatch(updateServices({ selectedService: action.payload }));
		dispatch(updateSpinner({ show: false, message: "" }));
	}
	if (action.type === CREATE_SERVICE_SUCCESS) {
		let services = getState().service.services;
		services.push(action.payload);
		dispatch(updateServices({ services }));
		dispatch(closeCreateServiceDrawer());
		dispatch(updateSpinner({ show: false, message: "" }));
		dispatch(
			updateNotification({
				type: "success",
				message: "Success",
				description: "Service Created Cuccessfully",
			})
		);
	}

	if (action.type === UPDATE_SERVICE_SUCCESS) {
		let services = getState().service.services;
		let updatedServices = services.map((el) => {
			if (el.id === action.payload.id) {
				return action.payload;
			}
			return el;
		});
		dispatch(updateServices({ services: updatedServices }));
		dispatch(closeUpdateServiceDrawer());
		dispatch(updateSpinner({ show: false, message: "" }));
		dispatch(
			updateNotification({
				type: "info",
				message: "Information",
				description: "Service Updated",
			})
		);
	}

	if (action.type === DELETE_SERVICE_SUCCESS) {
		let services = getState().service.services;
		let updatedServices = services.filter((el) => el.id !== action.deleteId);
		dispatch(updateServices({ services: updatedServices }));
		dispatch(closeUpdateServiceDrawer());
		dispatch(updateSpinner({ show: false, message: "" }));
		dispatch(
			updateNotification({
				type: "info",
				message: "Information",
				description: "Service Deleted",
			})
		);
	}
};
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

export const serviceMdl = [getServicesFlow, processServicesFlow];
