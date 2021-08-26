import classes from "@modules/Footer.module.scss";
import Container from "./Container";
import menuItems from "fixtures/menuItems";
import Link from "next/link";
import { MdArrowUpward } from "react-icons/md";

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer>
			<Container wide>
				<div className={classes.content}>
					<div className={classes.links}>
						{menuItems.map((item, i) => (
							<Link href={item.url} key={i}>
								<a
									target={item.newTab ? "_blank" : "_self"}
									rel="noreferrer"
								>
									{item.label}
								</a>
							</Link>
						))}
					</div>
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
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
