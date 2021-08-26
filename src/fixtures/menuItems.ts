interface MenuItem {
	label: string;
	url: string;
	newTab: boolean;
}

const menuItems: MenuItem[] = [
	{
		label: "CV",
		url: "/cv",
		newTab: false,
	},
	{
		label: "GitHub",
		url: "https://github.com/michaelhermansen",
		newTab: true,
	},
	{
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/michael-hermansen",
		newTab: true,
	},
];

export default menuItems;
