import Container from "@components/Container";
import Layout from "@components/Layout";
import classes from "@modules/404.module.scss";
import Link from "next/link";

const ErrorPage404 = () => {
	return (
		<Layout title="404: Siden finnes ikke" description="">
			<Container>
				<div className={classes.wrapper}>
					<h1 className={classes.page_title}>404</h1>
					<p>Beklager, men denne siden finnes ikke ...</p>
					<Link href="/">
						<a className={classes.home_link}>Gå til forsiden</a>
					</Link>
				</div>
			</Container>
		</Layout>
	);
};

export default ErrorPage404;
