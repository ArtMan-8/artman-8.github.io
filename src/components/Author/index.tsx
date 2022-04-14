import React from 'react';
import { SiHabr, SiLinkedin, SiTelegram, SiGithub, SiMaildotru } from 'react-icons/si';

import styles from './Author.module.scss';

export default function Author() {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.author}>
					<img alt="Владимир Артюхов" height={400} src="img/author.jpg" width={400} />
				</div>

				<div className={styles.info}>
					<div className={styles.line} />
					<h1>Владимир</h1>
					<h4>Frontend Developer</h4>

					<div className={styles.socials}>
						<a href="https://career.habr.com/artman-8" rel="noreferrer" target="_blank">
							<SiHabr className={styles.icon} />
						</a>
						<a href="https://github.com/ArtMan-8" rel="noreferrer" target="_blank">
							<SiGithub className={styles.icon} />
						</a>
						<a href="https://www.linkedin.com/in/artman-888/" rel="noreferrer" target="_blank">
							<SiLinkedin className={styles.icon} />
						</a>
						<a href="https://t.me/ArtMan_8" rel="noreferrer" target="_blank">
							<SiTelegram className={styles.icon} />
						</a>
						<a href="mailto:artman888@gmail.com" rel="noreferrer" target="_blank">
							<SiMaildotru className={styles.icon} />
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}
