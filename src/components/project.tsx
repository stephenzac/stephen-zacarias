import Image from "next/image";
import styles from "../styles/project.module.css";

interface ProjectProps {
  projectName: string;
  imgPath: string;
  projectDescription: string;
}

export default function Project({
  projectName,
  imgPath,
  projectDescription,
}: ProjectProps) {
  return (
    <div className={styles.project}>
      <h1>{projectName}</h1>
      <div className={styles["image-and-description"]}>
        <Image src={imgPath} height={80} width={90} alt="Picture of project" />
        <p>{projectDescription}</p>
      </div>
    </div>
  );
}
