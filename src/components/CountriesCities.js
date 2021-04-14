import { Cascader } from "antd";
import csc from "country-state-city";
import React from "react";
const optionLists = [
	{
		value: "zhejiang",
		label: "Zhejiang",
		isLeaf: false,
	},
	{
		value: "jiangsu",
		label: "Jiangsu",
		isLeaf: false,
	},
];

const LazyOptions = () => {
	const [options, setOptions] = React.useState(optionLists);

	const onChange = (value, selectedOptions) => {
		console.log(selectedOptions.map((option) => option.label).join(","));
	};

	const loadData = (selectedOptions) => {
		const targetOption = selectedOptions[selectedOptions.length - 1];
		targetOption.loading = true;

		if (targetOption.isCountry) {
			let childrenTargetOptions = csc
				.getStatesOfCountry(targetOption.value)
				.map((el) => {
					return {
						value: el.isoCode,
						label: el.name,
						countryCode: el.countryCode,
						isLeaf: false,
						isState: true,
					};
				});
			setTimeout(() => {
				targetOption.loading = false;
				targetOption.children = childrenTargetOptions;
				setOptions([...options]);
			}, 500);
		}

		if (targetOption.isState) {
			// load options lazily

			let childrenTargetOptions = csc
				.getCitiesOfState(targetOption.countryCode, targetOption.value)
				.map((el) => {
					return {
						value: el.name,
						label: el.name,
					};
				});
			setTimeout(() => {
				targetOption.loading = false;
				targetOption.children = childrenTargetOptions;
				setOptions([...options]);
			}, 500);
		}
	};

	React.useEffect(() => {
		let AllCountries = csc.getAllCountries();
		let countriesOptions = AllCountries.map((el) => {
			return {
				value: el.isoCode,
				label: el.name,
				isLeaf: false,
				isCountry: true,
			};
		});
		setOptions(countriesOptions);
	}, []);
	return (
		<Cascader
			options={options}
			loadData={loadData}
			onChange={onChange}
			changeOnSelect
			showSearch
		>
			<a href='#'>Change city</a>
		</Cascader>
	);
};
export default LazyOptions;
