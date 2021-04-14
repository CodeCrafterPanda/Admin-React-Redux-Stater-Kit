import { notification } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateNotification } from "../redux/actions";

export default function Notification() {
	const notify = useSelector((state) => state.notification);
	const dispatch = useDispatch();
	const { show } = notify;
	const onClose = () => {
		dispatch(
			updateNotification({
				show: false,
				type: "info",
				message: "",
				description: "",
			})
		);
	};
	const openNotificationWithIcon = ({ type, message, description }) => {
		notification[type]({
			message,
			description,
			onClose,
		});
	};
	React.useEffect(() => {
		if (show) {
			openNotificationWithIcon(notify);
		}
	}, [notify]);
	return <></>;
}
