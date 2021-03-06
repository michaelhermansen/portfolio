import classes from "@modules/BioCard.module.scss";
import Image from "./Image";

const BioCard = () => {
	return (
		<div className={classes.bio_card}>
			<div className={classes.bio_top}>
				<Image
					className={classes.image}
					src="/assets/portrait.jpg"
					alt="Portrett av Michael Hermansen"
					width={100}
					aspectRatio={1}
					priority
				/>
				<div>
					<p className={classes.name}>Michael Hermansen</p>
					<p className={classes.birth}>17. juli 1998</p>
				</div>
			</div>
			<ul className={classes.contact_info}>
				<li>
					<a href="mailto:michael.p.hermansen@gmail.com">
						michael.p.hermansen
						<wbr />
						@gmail.com
					</a>
				</li>
				<li>
					<a href="tel:+47 406 10 143">+47 406 10 143</a>
				</li>
			</ul>
		</div>
	);
};

export default BioCard;
