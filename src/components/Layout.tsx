import Head from "next/head";
import Header from "./Header";
import PageTransition from "./PageTransition";

interface LayoutProps {
	title: string;
	description: string;
	children: any;
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
	return (
		<>
			<Head>
				<title>{title} — Michael Hermansen</title>
				<meta name="description" content={description} />
			</Head>
			<Header />
			<PageTransition>
				<main>{children}</main>
			</PageTransition>
		</>
	);
};

export default Layout;