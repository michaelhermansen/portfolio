import classes from "@modules/CV.module.scss";
import cv from "fixtures/cv";

const CV = () => {
	return (
		<div className={classes.cv_container}>
			<div className={classes.cv_bio}>
				<img
					src="assets/headshot.jpg"
					alt="Portrett av Michael Hermansen"
				/>
				<div>
					<p className={classes.name}>Michael Hermansen</p>
					<p className={classes.birth}>17. juli 1998</p>
				</div>
			</div>
			<div className={classes.cv_content}>
				<section>
					<h3>Nøkkelkvalifikasjoner</h3>
					<ul className={classes.skill_list}>
						{cv.skills.map((skill, i) => (
							<li key={i}>{skill}</li>
						))}
					</ul>
				</section>
				<section>
					<h3>Utdanning</h3>
					<ul>
						{cv.education.map((entry, i) => (
							<li key={i} className={classes.cv_entry}>
								<p>{entry.duration}:</p>
								<p className={classes.main}>{entry.title}</p>
								<p>{entry.school}</p>
							</li>
						))}
					</ul>
				</section>
				<section>
					<h3>Relevant erfaring</h3>
					<ul>
						{cv.voluntary.map((entry, i) => (
							<li key={i} className={classes.cv_entry}>
								<p>{entry.duration}:</p>
								<p className={classes.main}>{entry.title}</p>
								<p>{entry.info}</p>
							</li>
						))}
					</ul>
				</section>
				<section>
					<h3>Arbeidserfaring</h3>
					<ul>
						{cv.work.map((entry, i) => (
							<li key={i} className={classes.cv_entry}>
								<p>{entry.duration}:</p>
								<p className={classes.main}>
									{entry.role}, {entry.employer}
								</p>
								<p>{entry.info}</p>
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
};

export default CV;
