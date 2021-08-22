import classes from "@modules/Contact.module.scss";
import Container from "@components/Container";
import Layout from "@components/Layout";

const Contact = () => {
	return (
		<Layout title="Kontakt" description="…">
			<Container>
				<h1 className={classes.page_title}>Kontakt</h1>
				<ul className={classes.contact_info_list}>
					<li className={classes.contact_info_item}>
						E-post:{" "}
						<a href="mailto:michael.p.hermansen@gmail.com">
							michael.p.hermansen@gmail.com
						</a>
					</li>
					<li className={classes.contact_info_item}>
						Mobil: <a href="tel:+47 406 10 143">406 10 143</a>
					</li>
				</ul>
			</Container>
		</Layout>
	);
};

export default Contact;
