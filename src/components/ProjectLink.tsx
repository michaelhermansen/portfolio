import classes from "@modules/ProjectLink.module.scss";
import Link from "next/link";
import { motion } from "framer-motion";
import CmsImage from "./CmsImage";
import { IProjectFields } from "types/contentful";
import shortString from "@lib/shortString";

const projectLinkAnimation = {
	initial: {
		opacity: 0,
		y: 20,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: "easeOut",
			type: "tween",
		},
	},
};

interface ProjectLinkProps {
	project: IProjectFields;
}

const ProjectLink: React.FC<ProjectLinkProps> = ({ project }) => {
	const projectMonth = shortString(project.month, 3).toLowerCase();

	return (
		<motion.li
			className={classes.project_item}
			variants={projectLinkAnimation}
		>
			<Link href={`/prosjekter/${project.slug}`}>
				<a>
					<CmsImage
						className={classes.thumbnail}
						src={project.thumbnail.fields.file.url}
						alt={project.thumbnail.fields.description}
						width={800}
					/>
					<div className={classes.info}>
						<div>
							<h2>{project.title}</h2>
							<p>{project.shortDescription}</p>
						</div>
						<p className={classes.date}>
							{projectMonth} {project.year}
						</p>
					</div>
				</a>
			</Link>
		</motion.li>
	);
};

export default ProjectLink;
