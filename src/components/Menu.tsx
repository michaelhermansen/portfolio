import classes from "@modules/Menu.module.scss";
import Link from "next/link";
import menuItems from "fixtures/menuItems";
import {
	MdKeyboardArrowRight as ArrowRight,
	MdOpenInNew as NewTab,
} from "react-icons/md";

const Menu = () => {
	return (
		<nav>
			<ul className={classes.menu_list}>
				{menuItems.map((item, i) => (
					<li key={i} className={classes.menu_item}>
						<Link href={item.url}>
							<a target={item.newTab ? "_blank" : "_self"}>
								{item.label}
								{item.newTab ? (
									<NewTab className="global__icon" />
								) : (
									<ArrowRight className="global__icon" />
								)}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Menu;
