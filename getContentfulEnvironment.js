// Automatisk generere typescript typer fra contentful
// som kan importeres fra 'types/contentful':
// npm run generate-contentful-types

require("dotenv").config({ path: "./.env.local" });

const contentfulManagement = require("contentful-management");

module.exports = async function () {
	const contentfulClient = contentfulManagement.createClient({
		accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
	});

	const space = await contentfulClient.getSpace(
		process.env.CONTENTFUL_SPACE_ID,
	);
	return await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT);
};
