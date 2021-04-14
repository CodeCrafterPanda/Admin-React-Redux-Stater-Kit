import {
	DashboardOutlined,
	SolutionOutlined,
	UserSwitchOutlined,
} from "@ant-design/icons";
import { Drawer, Menu } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSidebar } from "../redux/modules/sideBar";

const { SubMenu } = Menu;

function CustomDrawer() {
	const dispatch = useDispatch();
	const sidebar = useSelector((state) => state.sidebar);
	const onCollapse = () => {
		dispatch(toggleSidebar());
	};
	const handleClick = (e) => {
		console.log("click ", e);
	};

	return (
		<Drawer
			title='Basic Drawer'
			placement='left'
			closable={false}
			onClose={onCollapse}
			visible={sidebar}
			bodyStyle={{ padding: 0 }}
		>
			<Menu
				onClick={handleClick}
				defaultSelectedKeys={["18"]}
				defaultOpenKeys={["sub1"]}
				style={{ width: "100%" }}
				mode='inline'
			>
				<Menu.Item icon={<DashboardOutlined />} key='1'>
					<Link to='/dashboard'>Dashboard</Link>
				</Menu.Item>
				<SubMenu key='sub4' icon={<SolutionOutlined />} title='Libraries'>
					<Menu.Item icon={<SolutionOutlined />} key='6'>
						<Link to='/service'>Service</Link>{" "}
					</Menu.Item>
				</SubMenu>
				<SubMenu key='sub5' icon={<UserSwitchOutlined />} title='Company'>
					<Menu.Item key='13'>Employees</Menu.Item>
					<Menu.Item key='14'>Roles & Permissions</Menu.Item>
					<Menu.Item key='15'>Company Profile</Menu.Item>
					<Menu.Item key='16'>Legal Information</Menu.Item>
				</SubMenu>
			</Menu>
		</Drawer>
	);
}

export default CustomDrawer;
