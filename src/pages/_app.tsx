import "../styles/global.scss";
import smoothscroll from "smoothscroll-polyfill";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
	useEffect(() => {
		smoothscroll.polyfill();
	}, []);

	return <Component {...pageProps} />;
};

export default MyApp;
