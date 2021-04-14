import React from "react";
import CreateService from "../modules/ServiceModule/CreateService";
import ReadService from "../modules/ServiceModule/ReadService";
import UpdateService from "../modules/ServiceModule/UpdateService";
export default function CustomDrawersContainer() {
	return (
		<>
			<CreateService />
			<UpdateService />
			<ReadService />
		</>
	);
}
