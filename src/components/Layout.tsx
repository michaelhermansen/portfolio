import getOgImageSrc from "@lib/getOgImageSrc";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";
import PageTransition from "./PageTransition";

interface LayoutProps {
	title: string;
	description: string;
	children: any;
	ogImageSrc?: string;
}

const Layout: React.FC<LayoutProps> = ({
	title,
	description,
	children,
	ogImageSrc,
}) => {
	const router = useRouter();
	const ogImageUrl = ogImageSrc && getOgImageSrc(ogImageSrc);

	return (
		<>
			<Head>
				<title>{title} — Michael Hermansen</title>
				<meta name="description" content={description} />

				<meta
					property="og:title"
					content={`${title} — Michael Hermansen`}
				/>
				<meta
					name="twitter:title"
					content={`${title} — Michael Hermansen`}
				/>
				<meta
					property="og:url"
					content={`https://michaelhermansen.no/${router.asPath}`}
				/>
				<meta
					property="twitter:url"
					content={`https://michaelhermansen.no/${router.asPath}`}
				/>
				<meta property="og:type" content="website" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="michaelhermansen.no" />
				<meta property="og:description" content={description} />
				<meta name="twitter:description" content={description} />

				{ogImageUrl && (
					<>
						<meta property="og:image" content={ogImageUrl} />
						<meta name="twitter:image" content={ogImageUrl}></meta>
					</>
				)}
			</Head>
			<Header />
			<PageTransition>
				<main>{children}</main>
				<Footer />
			</PageTransition>
		</>
	);
};

export default Layout;
