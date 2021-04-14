import React from "react";

// ------------------------------------ Dashboard module routes ---------------------------------------
const Dashboard = React.lazy(() =>
	import("../modules/DashboardModule/Dashboard")
);
// ------------------------------------ Service module routes ------------------------------------
const ServiceTemplates = React.lazy(() =>
	import("../modules/ServiceModule/ServiceTemplates")
);

const routes = [
	{ path: "/", exact: true, name: "Home" },
	{ path: "/dashboard", name: "Dashboard", component: Dashboard },
	{
		path: "/service",
		name: "Service",
		component: ServiceTemplates,
	},
];
export default routes;
