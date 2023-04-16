import React, { ReactNode } from "react";

type Props = {
	children: ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="app-layout">
			<div className="layout">{children}</div>
		</div>
	);
};

export default AppLayout;
