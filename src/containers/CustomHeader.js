import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../redux/modules/sideBar";

const { Header } = Layout;

function CustomHeader() {
	// React-Redux Hooks -----------------------------------------------------------------------------------------------
	const dispatch = useDispatch();
	const sidebar = useSelector((state) => state.sidebar);
	// Function --------------------------------------------------------------------------------------------------------
	const onCollapse = () => {
		dispatch(toggleSidebar());
	};

	return (
		<Header className='site-layout-background' style={{ padding: 0 }}>
			{React.createElement(sidebar ? MenuUnfoldOutlined : MenuFoldOutlined, {
				className: "trigger",
				onClick: onCollapse,
			})}
		</Header>
	);
}

export default CustomHeader;
