import { createClient, EntryCollection } from "contentful";
import { IProjectFields } from "types/contentful";

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

const getProjects = async (slug?: string): Promise<IProjectFields[]> => {
	const client = createClient({
		space: SPACE_ID,
		accessToken: ACCESS_TOKEN,
	});

	const entries: EntryCollection<IProjectFields> =
		await client.getEntries<IProjectFields>({
			content_type: "project",
			"fields.slug": slug,
		});

	const projects = entries.items.map(item => item.fields);
	return projects;
};

export default getProjects;
