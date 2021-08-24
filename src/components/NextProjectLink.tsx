import classes from "@modules/NextProjectLink.module.scss";
import Link from "next/link";
import { IProjectFields } from "types/contentful";
import CmsImage from "./CmsImage";

interface NextProjectLinkProps {
	project: IProjectFields;
}

const NextProjectLink: React.FC<NextProjectLinkProps> = ({ project }) => {
	return (
		<Link href={`/prosjekter/${project.slug}`}>
			<a className={classes.link}>
				<div className={classes.info}>
					<p>Neste prosjekt:</p>
					<p className={classes.title}>{project.title}</p>
				</div>
				<CmsImage
					src={project.thumbnail.fields.file.url}
					alt={project.thumbnail.fields.description}
					width={1400}
				/>
			</a>
		</Link>
	);
};

export default NextProjectLink;
