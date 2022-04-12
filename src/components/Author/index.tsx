import React from "react";
import {
	SiHabr,
	SiLinkedin,
	SiTelegram,
	SiGithub,
	SiMaildotru,
} from "react-icons/si";

import styles from "./Author.module.scss";

export default function Author() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.author}>
					<img
						src="img/author.jpg"
						alt="Владимир Артюхов"
						width={400}
						height={400}
					/>
				</div>

				<div className={styles.info}>
					<div className={styles.line} />
					<h1>Владимир</h1>
					<h4>Frontend Developer</h4>
					<div className={styles.socials}>
						<a
							href="https://career.habr.com/artman-8"
							target="_blank"
							rel="noreferrer"
						>
							<SiHabr className={styles.icon} />
						</a>
						<a
							href="https://github.com/ArtMan-8"
							target="_blank"
							rel="noreferrer"
						>
							<SiGithub className={styles.icon} />
						</a>
						<a
							href="https://www.linkedin.com/in/artman-888/"
							target="_blank"
							rel="noreferrer"
						>
							<SiLinkedin className={styles.icon} />
						</a>
						<a href="https://t.me/ArtMan_8" target="_blank" rel="noreferrer">
							<SiTelegram className={styles.icon} />
						</a>
						<a
							href="mailto:artman888@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<SiMaildotru className={styles.icon} />
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}
