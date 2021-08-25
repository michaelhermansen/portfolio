import classes from "@modules/Container.module.scss";

interface ContainerProps {
	wide?: true;
	children: any;
}

const Container: React.FC<ContainerProps> = ({ wide, children }) => {
	return (
		<div className={[classes.container, wide && classes.wide].join(" ")}>
			{children}
		</div>
	);
};

export default Container;
