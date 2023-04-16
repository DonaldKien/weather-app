import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

type Props = {
	children: ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
	return (
		<div className="app-layout">
			<ToastContainer limit={1} />
			<div className="layout">
				<div className="layout__wrapper">{children}</div>
			</div>
		</div>
	);
};

export default AppLayout;
