import React from "react";

type Props = {
	label?: string;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	value: string;
	error?: string;
};

const AppSearchInput: React.FC<Props> = ({ label, onChange, value, error }) => {
	return (
		<div className="app-search-input">
			<div className="search">
				<div className="search__label">{label}</div>
				<input className="search__input" onChange={onChange} value={value} />
				<div>{error}</div>
			</div>
		</div>
	);
};

export default AppSearchInput;
