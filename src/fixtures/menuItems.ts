interface MenuItem {
	label: string;
	url: string;
	newTab: boolean;
}

const menuItems: MenuItem[] = [
	{
		label: "Kontakt",
		url: "/kontakt",
		newTab: false,
	},
	{
		label: "LinkedIn",
		url: "https://linkedin.com",
		newTab: true,
	},
	{
		label: "GitHub",
		url: "https://github.com",
		newTab: true,
	},
];

export default menuItems;
