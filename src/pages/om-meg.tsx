import classes from "@modules/Contact.module.scss";
import Container from "@components/Container";
import Layout from "@components/Layout";

const Contact = () => {
	return (
		<Layout title="Om meg" description="…">
			<Container>
				<h1 className={classes.page_title}>Om meg</h1>
				<ul className={classes.contact_info_list}>
					<li className={classes.contact_info_item}>…</li>
					<li className={classes.contact_info_item}>…</li>
					<li className={classes.contact_info_item}>…</li>
				</ul>
			</Container>
		</Layout>
	);
};

export default Contact;
