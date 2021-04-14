import {
	CREATE_SERVICE,
	DELETE_SERVICE,
	GET_SERVICE,
	GET_SERVICES,
	UPDATE_SERVICE,
	UPDATE_SERVICES,
} from "../constants";

// ------------------------------------
// Actions
// ------------------------------------
export function openCreateServiceDrawer() {
	return {
		type: UPDATE_SERVICES,
		payload: { createServiceDrawer: true },
	};
}

export function closeCreateServiceDrawer() {
	return {
		type: UPDATE_SERVICES,
		payload: { createServiceDrawer: false },
	};
}

export function openUpdateServiceDrawer() {
	return {
		type: UPDATE_SERVICES,
		payload: { updateServiceDrawer: true },
	};
}

export function closeUpdateServiceDrawer() {
	return {
		type: UPDATE_SERVICES,
		payload: { updateServiceDrawer: false },
	};
}

export function openReadServiceDrawer() {
	return {
		type: UPDATE_SERVICES,
		payload: { readServiceDrawer: true },
	};
}

export function closeReadServiceDrawer() {
	return {
		type: UPDATE_SERVICES,
		payload: { readServiceDrawer: false },
	};
}
// ------------------------------------
// Async Actions
// ------------------------------------

export const getAllServices = () => {
	return {
		type: GET_SERVICES,
	};
};

export const getSelectedService = (payload) => {
	return {
		type: GET_SERVICE,
		payload,
	};
};

export const createNewService = (payload) => {
	return {
		type: CREATE_SERVICE,
		payload,
	};
};

export const updateService = (payload) => {
	return {
		type: UPDATE_SERVICE,
		payload,
	};
};

export const deleteService = (payload) => {
	return {
		type: DELETE_SERVICE,
		payload,
	};
};

export const updateServices = (data) => {
	return { type: UPDATE_SERVICES, payload: data };
};
