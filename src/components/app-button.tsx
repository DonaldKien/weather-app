import React from "react";

type Props = {
	label: string;
	onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const AppButton = ({ label, onClick }: Props) => {
	return (
		<div className="app-button">
			<button className="button" onClick={onClick}>
				{label}
			</button>
		</div>
	);
};

export default AppButton;
