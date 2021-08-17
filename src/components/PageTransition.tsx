import { motion } from "framer-motion";

const transition = {
	initial: {
		opacity: 0,
		y: 16,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			delay: 0.2,
			ease: "easeOut",
		},
	},
};

const PageTransition: React.FC = ({ children }) => {
	return (
		<motion.div variants={transition} initial="initial" animate="animate">
			{children}
		</motion.div>
	);
};

export default PageTransition;
