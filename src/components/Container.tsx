import classes from "@modules/Container.module.scss";

interface ContainerProps {
	wide?: true;
	semiwide?: true;
	children: any;
}

const Container: React.FC<ContainerProps> = ({ wide, semiwide, children }) => {
	return (
		<div
			className={[
				classes.container,
				wide && classes.wide,
				semiwide && classes.semiwide,
			].join(" ")}
		>
			{children}
		</div>
	);
};

export default Container;
