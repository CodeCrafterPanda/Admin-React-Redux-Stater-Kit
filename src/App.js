import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Notification from "./components/Notification";

// Containers
const CustomLayout = React.lazy(() => import("./containers/CustomLayout"));

export default function App() {
	const spinner = useSelector((state) => state.spinner);
	const { show, message } = spinner;
	return (
		<>
			<Spin tip={message} spinning={show} size='large'>
				<HashRouter>
					<React.Suspense fallback={<Spin size='large' />}>
						<Switch>
							<Route
								path='/'
								name='Home'
								render={(props) => <CustomLayout {...props} />}
							/>
						</Switch>
					</React.Suspense>
				</HashRouter>
			</Spin>
			<Notification />
		</>
	);
}
