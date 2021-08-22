import classes from "@modules/ToTopButton.module.scss";
import { MdArrowUpward } from "react-icons/md";

const ToTopButton = () => {
	return (
		<button
			onClick={() =>
				window.scrollTo({
					top: 0,
					behavior: "smooth",
				})
			}
			className={classes.toTopButton}
		>
			Til toppen
			<MdArrowUpward className="global__button" />
		</button>
	);
};

export default ToTopButton;
