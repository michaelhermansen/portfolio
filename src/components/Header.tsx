import classes from "@modules/Header.module.scss";
import Link from "next/link";
import Container from "./Container";
import Menu from "./Menu";
import { MdKeyboardArrowDown as Arrow } from "react-icons/md";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const menuAnimation = {
	hidden: {
		opacity: 0,
		y: -20,
		height: 40,
		transition: {
			duration: 0.2,
			ease: "easeIn",
		},
	},
	visible: {
		opacity: 1,
		y: 0,
		height: "auto",
		transition: {
			duration: 0.3,
			ease: "easeOut",
		},
	},
};

const Header = () => {
	const router = useRouter();
	const isIndex = router.pathname === "/";

	const [menuIsOpen, setMenuIsOpen] = useState(false);

	useEffect(() => {
		const closeMenu = () => menuIsOpen && setMenuIsOpen(false);

		document.addEventListener("click", closeMenu);
		return () => document.removeEventListener("click", closeMenu);
	}, [menuIsOpen]);

	return (
		<Container>
			<header className={classes.header}>
				<Link href="/">
					<a className={classes.brand}>
						{isIndex && <h1>Michael Hermansen</h1>}
						{!isIndex && <p>Michael Hermansen</p>}
						<p>designer og utvikler</p>
					</a>
				</Link>
				<button
					className={classes.menu_button}
					onClick={() => setMenuIsOpen(current => !current)}
				>
					<Arrow
						className={[
							"global__icon",
							classes.menu_icon,
							menuIsOpen && classes.is_open,
						].join(" ")}
					/>
				</button>
				<AnimatePresence>
					{menuIsOpen && (
						<motion.div
							className={classes.menu_wrapper}
							variants={menuAnimation}
							initial="hidden"
							animate="visible"
							exit="hidden"
						>
							<Menu />
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		</Container>
	);
};

export default Header;
