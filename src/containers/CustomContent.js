import { Layout } from "antd";
import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import routes from "../router/Routes";
import CustomDrawersContainer from "./CustomDrawersContainer";

const { Content } = Layout;

function App() {
	return (
		<Content
			style={{
				margin: "24px 16px",
				padding: 24,
				minHeight: 280,
			}}
		>
			<Suspense fallback={<></>}>
				<Switch>
					{routes.map((route, idx) => {
						return (
							route.component && (
								<Route
									key={idx}
									path={route.path}
									exact={route.exact}
									name={route.name}
									render={(props) => <route.component {...props} />}
								/>
							)
						);
					})}
					<Redirect from='/' to='/dashboard' />
				</Switch>
				<CustomDrawersContainer />
			</Suspense>
		</Content>
	);
}

export default App;
