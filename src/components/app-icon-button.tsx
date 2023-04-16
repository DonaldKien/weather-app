import React from "react";

type StyleTypeProps = "purple" | "white" | undefined;

type Props = {
	src: string;
	alt: string;
	buttonType?: "button" | "submit";
	styleType?: StyleTypeProps;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
    disabled?: boolean
};

const getButtonClassName = (styleType: StyleTypeProps) => {
	const className = ["button"];
	if (styleType === "purple") {
		className.push("button__purple");
	} else if (styleType === "white") {
		className.push("button__white");
	}
	return className.join(" ");
};

const AppIconButton: React.FC<Props> = ({ src, alt, buttonType, styleType, onClick, disabled }) => {
	return (
		<div className="app-icon-button">
			<button disabled={disabled} type={buttonType || "button"} className={getButtonClassName(styleType)} onClick={onClick}>
				<img alt={alt} src={src} />
			</button>
		</div>
	);
};

export default AppIconButton;
