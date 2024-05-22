import Image from "next/image";
import styles from "../styles/page.module.css";
// import Project from "../components/project";

export default function Home() {
  return (
    <div className={styles["home-page-body"]}>
      <div id={styles["name-pic-area"]}>
        <h1 id={styles["name-header"]}>Hello, I'm Stephen!</h1>
        <Image
          src="/stephen.JPG"
          height={200}
          width={200}
          alt="Picture of Stephen"
          priority={true}
          id={styles["me-picture"]}
        />
      </div>

      <div id={styles["about-area"]}>
        <h1 className={styles["section-header"]}>About</h1>
        <p>
          I'm a third year Computer Science major at the University of
          California, Irvine. I have a particular interest in developing web
          applications, with experience in developing web applications with
          Typescript, React, Tailwind CSS, and HTML/CSS.
        </p>
      </div>

      <div id={styles["projects-area"]}>
        <h1 className={styles["section-header"]}>Projects</h1>
        {/* <Project
          projectName="Soundle"
          imgPath="/soundle.jpeg"
          projectDescription="Soundle description here"
        />

        <Project
          projectName="Sentimentify"
          imgPath="/sentimentify.jpeg"
          projectDescription="Sentimentify description here"
        />

        <Project
          projectName="song-keys"
          imgPath="/song-keys.jpeg"
          projectDescription="song-keys description here"
        /> */}
      </div>

      <div id={styles["bottom-area"]}>
        <p>© Stephen Zacarias 2024</p>
        <p>Made with Next.js, React, and Typescript</p>
      </div>
    </div>
  );
}
