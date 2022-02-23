import classes from "@modules/CV.module.scss";
import Container from "@components/Container";
import Layout from "@components/Layout";
import BioCard from "@components/BioCard";
import cv from "@fixtures/cv";

const CV = () => {
	return (
		<Layout
			title="CV"
			description={`Jobber for øyeblikket som
				${cv.work[0].role.toLocaleLowerCase()} hos
				${cv.work[0].employer}.`}
		>
			<Container>
				<h1 className={classes.page_title}>CV</h1>
				<div className={classes.cv_grid}>
					<aside>
						<BioCard />
					</aside>
					<div className={classes.cv_content}>
						<h2>Arbeidserfaring</h2>
						{cv.work.map((item, i) => (
							<div key={i} className={classes.cv_entry}>
								<p>{item.duration}:</p>
								<p>
									{item.role}, {item.employer}
								</p>
								<p>{item.info}</p>
							</div>
						))}
						<h2>Utdanning</h2>
						{cv.education.map((item, i) => (
							<div key={i} className={classes.cv_entry}>
								<p>{item.duration}:</p>
								<p>{item.title}</p>
								<p>{item.school}</p>
							</div>
						))}
						<h2>Frivillig erfaring</h2>
						{cv.voluntary.map((item, i) => (
							<div key={i} className={classes.cv_entry}>
								<p>{item.duration}:</p>
								<p>{item.title}</p>
								<p>{item.info}</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</Layout>
	);
};

export default CV;
