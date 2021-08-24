import classes from "@modules/ProjectTemplate.module.scss";
import CmsImage from "@components/CmsImage";
import Container from "@components/Container";
import Layout from "@components/Layout";
import getProjects from "@lib/getProjects";
import formatProjectLink from "@lib/formatProjectLink";
import sortProjects from "@lib/sortProjects";
import NextProjectLink from "@components/NextProjectLink";
import { GetStaticPaths, GetStaticProps } from "next";
import { IProjectFields } from "types/contentful";
import { MdOpenInNew as NewTab } from "react-icons/md";

interface ProjectTemplateProps {
	project: IProjectFields;
	nextProject: IProjectFields;
}

const ProjectTemplate: React.FC<ProjectTemplateProps> = ({
	project,
	nextProject,
}) => {
	// project.link er en string med formatet *Tittel* [*URL*].
	// projectLink er et objekt med verdier for "title" og "url".
	const projectLink = project.link && formatProjectLink(project.link);

	return (
		<Layout title={project.title} description={project.blurb}>
			<Container wide>
				<CmsImage
					className={classes.thumbnail}
					src={project.thumbnail.fields.file.url}
					alt={project.thumbnail.fields.description}
					width={1400}
				/>
			</Container>
			<Container>
				<div className="global__text">
					<h1 className={classes.title}>{project.title}</h1>
					<p className={classes.info}>
						{`
              ${project.shortDescription},
              ${project.month.toLowerCase()}
              ${project.year}
            `}
					</p>
					<div className={classes.links}>
						{projectLink && (
							<a
								href={projectLink.url}
								target="_blank"
								rel="noreferrer"
							>
								{projectLink.title}
								<NewTab />
							</a>
						)}
						{project.gitHubLink && (
							<a
								href={project.gitHubLink}
								target="_blank"
								rel="noreferrer"
							>
								GitHub
								<NewTab />
							</a>
						)}
					</div>
					<p className={classes.blurb}>{project.blurb}</p>
				</div>
				{project.images && (
					<div className={classes.images}>
						{project.images.map((image, i) => (
							<CmsImage
								key={i}
								src={image.fields.file.url}
								alt={image.fields.description}
								width={1200}
							/>
						))}
					</div>
				)}
				<NextProjectLink project={nextProject} />
			</Container>
		</Layout>
	);
};

export default ProjectTemplate;

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const slug = params.slug.toString() || null;
	const response = await getProjects();

	const projects = sortProjects(response);
	const project = projects.find(project => project.slug === slug);
	const projectIndex = projects.indexOf(project);
	const nextProject = projects[projectIndex + 1] || projects[0];

	return {
		props: {
			project,
			nextProject,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	const projects = await getProjects();
	const paths = projects.map(item => ({
		params: { slug: item.slug },
	}));

	return { paths, fallback: false };
};
