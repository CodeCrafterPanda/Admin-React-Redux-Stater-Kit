import { Layout } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toggleSidebar } from "../redux/modules/sideBar";
import CustomContent from "./CustomContent";
import CustomDrawer from "./CustomDrawer";
import CustomHeader from "./CustomHeader";

function CustomLayout() {
	// React-Redux Hooks -----------------------------------------------------------------------------------------------
	const sidebar = useSelector((state) => state.sidebar);
	const dispatch = useDispatch();
	// React-Router Hooks ----------------------------------------------------------------------------------------------
	const history = useHistory();
	const { pathname } = history.location;
	// React-UseEffect Hook --------------------------------------------------------------------------------------------
	React.useEffect(() => {
		sidebar && dispatch(toggleSidebar());
	}, [pathname]);
	// -----------------------------------------------------------------------------------------------------------------
	return (
		<Layout style={{ height: "100%" }}>
			<CustomDrawer />
			<Layout className='site-layout'>
				<CustomHeader />
				<CustomContent />
			</Layout>
		</Layout>
	);
}

export default CustomLayout;
