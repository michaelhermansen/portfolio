import "../styles/global.scss";
import smoothscroll from "smoothscroll-polyfill";
import { useEffect, useState } from "react";
import Head from "next/head";
import Analytics from "@components/Analytics";

const MyApp = ({ Component, pageProps }) => {
	const [pageHasLoaded, setPageHasLoaded] = useState(false);

	useEffect(() => {
		setPageHasLoaded(true);
		smoothscroll.polyfill();
	}, []);

	return (
		<>
			{pageHasLoaded && <Analytics />}
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#1c1c20"
				/>
				<meta name="msapplication-TileColor" content="#1c1c20" />
				<meta name="theme-color" content="#1c1c20"></meta>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default MyApp;
