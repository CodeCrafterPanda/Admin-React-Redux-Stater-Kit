import {
	Button,
	Col,
	DatePicker,
	Drawer,
	Form,
	Input,
	Row,
	Select,
} from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	closeCreateServiceDrawer,
	createNewService,
	openCreateServiceDrawer,
} from "../../redux/actions/service";

const { Option } = Select;

const CreateService = () => {
	// React-Redux Hooks -----------------------------------------------------------------------------------------------
	const dispatch = useDispatch();
	const service = useSelector((state) => state.service);
	const { createServiceDrawer } = service;
	// Functions --------------------------------------------------------------------------------------------------------

	const openDrawer = () => {
		dispatch(openCreateServiceDrawer());
	};

	const closeDrawer = () => {
		dispatch(closeCreateServiceDrawer());
	};
	const handleSave = () => {
		let newService = {
			userId: 7,
			id: 101,
			title: "New Title",
			body: "New Body",
		};
		dispatch(createNewService(newService));
	};

	return (
		<>
			<Drawer
				title='Create a New Service'
				width={720}
				visible={createServiceDrawer}
				bodyStyle={{ paddingBottom: 80 }}
				footer={
					<div
						style={{
							textAlign: "right",
						}}
					>
						<Button onClick={closeDrawer} style={{ marginRight: 8 }}>
							Cancel
						</Button>
						<Button onClick={handleSave} type='primary'>
							Submit
						</Button>
					</div>
				}
				closable={false}
			>
				<Form layout='vertical'>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='name'
								label='Name'
								rules={[{ required: true, message: "Please enter user name" }]}
							>
								<Input placeholder='Please enter user name' />
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='url'
								label='Url'
								rules={[{ required: true, message: "Please enter url" }]}
							>
								<Input
									style={{ width: "100%" }}
									addonBefore='http://'
									addonAfter='.com'
									placeholder='Please enter url'
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='owner'
								label='Owner'
								rules={[{ required: true, message: "Please select an owner" }]}
							>
								<Select placeholder='Please select an owner'>
									<Option value='xiao'>Xiaoxiao Fu</Option>
									<Option value='mao'>Maomao Zhou</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='type'
								label='Type'
								rules={[{ required: true, message: "Please choose the type" }]}
							>
								<Select placeholder='Please choose the type'>
									<Option value='private'>Private</Option>
									<Option value='public'>Public</Option>
								</Select>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={12}>
							<Form.Item
								name='approver'
								label='Approver'
								rules={[
									{ required: true, message: "Please choose the approver" },
								]}
							>
								<Select placeholder='Please choose the approver'>
									<Option value='jack'>Jack Ma</Option>
									<Option value='tom'>Tom Liu</Option>
								</Select>
							</Form.Item>
						</Col>
						<Col span={12}>
							<Form.Item
								name='dateTime'
								label='DateTime'
								rules={[
									{ required: true, message: "Please choose the dateTime" },
								]}
							>
								<DatePicker.RangePicker
									style={{ width: "100%" }}
									getPopupContainer={(trigger) => trigger.parentElement}
								/>
							</Form.Item>
						</Col>
					</Row>
					<Row gutter={16}>
						<Col span={24}>
							<Form.Item
								name='description'
								label='Description'
								rules={[
									{
										required: true,
										message: "please enter url description",
									},
								]}
							>
								<Input.TextArea
									rows={4}
									placeholder='please enter url description'
								/>
							</Form.Item>
						</Col>
					</Row>
				</Form>
			</Drawer>
		</>
	);
};
export default CreateService;