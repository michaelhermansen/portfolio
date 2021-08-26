import classes from "@modules/Home.module.scss";
import Container from "@components/Container";
import Layout from "@components/Layout";
import ProjectLink from "@components/ProjectLink";
import getProjects from "@lib/getProjects";
import sortProjects from "@lib/sortProjects";
import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import { IProjectFields } from "types/contentful";

const stagger = {
	animate: {
		transition: {
			delayChildren: 0.1,
			staggerChildren: 0.1,
		},
	},
};

interface HomeProps {
	projects: IProjectFields[];
}

const Home: React.FC<HomeProps> = ({ projects }) => {
	return (
		<Layout
			title="Portefølje"
			description="Michael Hermansen, designer og utvikler med bachelorgrad i grafisk design fra Høyskolen Kristiania."
		>
			<Container wide>
				<motion.ul className={classes.project_grid} variants={stagger}>
					{projects.map((project, i) => (
						<ProjectLink project={project} key={i} />
					))}
				</motion.ul>
			</Container>
		</Layout>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const projects = await getProjects();
	const sortedProjects = sortProjects(projects);

	return {
		props: {
			projects: sortedProjects,
		},
	};
};
