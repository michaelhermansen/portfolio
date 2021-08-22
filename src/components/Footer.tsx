import classes from "@modules/Footer.module.scss";
import Container from "./Container";
import menuItems from "fixtures/menuItems";
import Link from "next/link";
import ToTopButton from "./ToTopButton";

const currentYear = new Date().getFullYear();

const Footer = () => {
	return (
		<footer>
			<Container wide>
				<div className={classes.content}>
					<div className={classes.links}>
						{menuItems.map((item, i) => (
							<Link href={item.url} key={i}>
								<a target={item.newTab ? "_blank" : "_self"}>
									{item.label}
								</a>
							</Link>
						))}
					</div>
					<ToTopButton />
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
