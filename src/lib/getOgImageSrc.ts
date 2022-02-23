const getOgImageSrc = (imageUrl: string) => {
	if (!imageUrl.includes("images.ctfassets.net")) return imageUrl;
	return `https:${imageUrl}?fm=jpg&fit=fill&w=1200&h=630`;
};

export default getOgImageSrc;
