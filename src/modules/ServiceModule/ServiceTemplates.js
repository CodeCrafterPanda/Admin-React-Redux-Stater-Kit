import {
	DeleteOutlined,
	EditOutlined,
	EyeOutlined,
	PlusOutlined,
} from "@ant-design/icons";
import { Button, message, Popconfirm, Space, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	deleteService,
	getAllServices,
	getSelectedService,
	openCreateServiceDrawer,
	openReadServiceDrawer,
	openUpdateServiceDrawer,
} from "../../redux/actions/service";

const ServiceTemplates = () => {
	// React-Redux Hooks -----------------------------------------------------------------------------------------------
	const dispatch = useDispatch();
	const service = useSelector((state) => state.service);
	const { services } = service;

	// Default Table Configuration --------------------------------------------------------------------------------------------------------
	const data = services.map((service, i) => {
		return {
			key: service.id,
			name: service.title,
			age: `${i}2`,
			address: service.userId,
			description: service.body,
		};
	});
	const expandable = {
		expandedRowRender: (record) => <p>{record.description}</p>,
	};
	const title = () => (
		<Space size='middle'>
			<Button
				type='primary'
				onClick={() => dispatch(openCreateServiceDrawer())}
			>
				<PlusOutlined /> New Service
			</Button>
		</Space>
	);
	const showHeader = true;
	const footer = () => "Here is footer";
	const pagination = { position: "bottom" };
	const tableConfig = {
		bordered: true,
		loading: false,
		pagination,
		size: "default",
		expandable,
		showHeader,
		title,
		rowSelection: {},
		scroll: undefined,
		hasData: true,
		tableLayout: undefined,
		top: "none",
		bottom: "bottomRight",
	};
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
		},
		{
			title: "Age",
			dataIndex: "age",
			sorter: (a, b) => a.age - b.age,
		},
		{
			title: "Address",
			dataIndex: "address",
			filters: [
				{
					text: "1",
					value: "1",
				},
				{
					text: "New York",
					value: "New York",
				},
			],
			onFilter: (value, record) => record.address.toString().includes(value),
		},
		{
			title: "Action",
			key: "action",

			render: (value) => (
				<Space size='middle'>
					<Button
						type='link'
						primary='true'
						onClick={() => {
							dispatch(getSelectedService(value.key));
							dispatch(openReadServiceDrawer());
						}}
					>
						<EyeOutlined />
					</Button>
					<Button
						type='link'
						primary='true'
						onClick={() => {
							dispatch(getSelectedService(value.key));
							dispatch(openUpdateServiceDrawer());
						}}
					>
						<EditOutlined />
					</Button>
					<ConfirmDelete id={value.key} />
				</Space>
			),
		},
	];

	const { xScroll, yScroll, ...tableConfigToMap } = tableConfig;

	const scroll = {};
	if (yScroll) {
		scroll.y = 240;
	}
	if (xScroll) {
		scroll.x = "100vw";
	}

	const tableColumns = columns.map((item) => ({
		...item,
		ellipsis: tableConfigToMap.ellipsis,
	}));
	if (xScroll === "fixed") {
		tableColumns[0].fixed = true;
		tableColumns[tableColumns.length - 1].fixed = "right";
	}

	// ----------------------------------------------------------------------------------------------------------------------------------

	const ConfirmDelete = (id) => {
		const confirm = (e) => {
			dispatch(deleteService(id));
		};

		const cancel = (e) => {
			message.success("Service is Safe");
		};

		return (
			<Popconfirm
				title='Are you sure to delete this task?'
				onConfirm={confirm}
				onCancel={cancel}
				okText='Yes'
				cancelText='No'
			>
				<Button type='link' danger='true'>
					<DeleteOutlined />
				</Button>
			</Popconfirm>
		);
	};
	// --------------------------------------------------------------------------------------------------------------------
	React.useEffect(() => {
		dispatch(getAllServices());
	}, []);
	return (
		<>
			<Table
				{...tableConfig}
				pagination={{ position: [tableConfig.top, tableConfig.bottom] }}
				columns={tableColumns}
				dataSource={tableConfigToMap.hasData ? data : null}
				scroll={scroll}
			/>
		</>
	);
};

export default ServiceTemplates;
