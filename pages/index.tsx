import Head from "next/head";
import Image from "next/image";
import { SiHabr, SiLinkedin } from "react-icons/si";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import styles from "../styles/Index.module.scss";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend developer - Владимир Артюхов</title>
        <meta name="description" content="Personal developer site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.author}>
          <Image
            src="/author.jpg"
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
              <FaGithub className={styles.icon} />
            </a>
            <a
              href="https://www.linkedin.com/in/artman-888/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin className={styles.icon} />
            </a>
            <a href="https://t.me/ArtMan_8" target="_blank" rel="noreferrer">
              <FaTelegram className={styles.icon} />
            </a>
            <a
              href="mailto:artman888@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <IoMail className={styles.icon} />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
