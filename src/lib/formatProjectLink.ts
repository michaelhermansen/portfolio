interface LinkObject {
	title: string;
	url: string;
}

/**
 * Formaterer link-string med formatet *Link-tittel* [*URL*]
 * til objekt med verdier for "title" og "url".
 * Dette er slik egendefinerte linker kommer fra CMS-et.
 *
 * @param linkString String med formatet *Link-tittel* [*URL*]
 * @returns Objekt med verdier for "title" og "url".
 */
const formatProjectLink = (linkString: string): LinkObject => {
	const regex = /(.*)\[(.*)\]/gi;
	const matches = regex.exec(linkString);

	const linkObject: LinkObject = {
		title: matches[1].trim(),
		url: matches[2].trim(),
	};

	return linkObject;
};

export default formatProjectLink;
