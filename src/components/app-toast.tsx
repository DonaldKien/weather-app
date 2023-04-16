import { toast, ToastPosition, Theme } from "react-toastify";

const toastConfig = {
	position: "top-center" as ToastPosition,
	autoClose: 3000,
	hideProgressBar: false,
	newestOnTop: false,
	closeOnClick: true,
	rtl: false,
	pauseOnFocusLoss: false,
	draggable: false,
	pauseOnHover: true,
	theme: "colored" as Theme,
};

const appToastError = (message: string) => {
	toast.error(message, { ...toastConfig });
};

export default appToastError;
