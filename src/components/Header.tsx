import classes from "@modules/Header.module.scss";
import Link from "next/link";
import Container from "./Container";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/dist/client/router";

const Header = () => {
	const router = useRouter();
	const isIndex = router.pathname === "/";

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
				<button className={classes.menu_button}>
					<MdKeyboardArrowDown className="global__icon" />
				</button>
			</header>
		</Container>
	);
};

export default Header;
