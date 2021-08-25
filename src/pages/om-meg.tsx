import classes from "@modules/About.module.scss";
import Container from "@components/Container";
import Layout from "@components/Layout";
import CV from "@components/CV";

const About = () => {
	return (
		<Layout title="Om meg" description="…">
			{/* <Container>
				<h1 className={classes.page_title}>Om meg</h1>
			</Container> */}
			<Container wide>
				<div className={classes.content}>
					<CV />
				</div>
			</Container>
		</Layout>
	);
};

export default About;
