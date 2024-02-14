import styles from "./Equipe.module.scss";
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "Killian David",
    designation: "Développeur Web Full Stack",
    image:
      "https://media.licdn.com/dms/image/D4E03AQH2vfesN1VoWw/profile-displayphoto-shrink_800_800/0/1678713830650?e=1713398400&v=beta&t=SdoqASX8KzlO47K5iCCp2wRsd84_5rJAHk-LGt6rECM",
  },

  {
    id: 2,
    name: "Enzo Cosson",
    designation: "Développeur Web Full Stack",
    image:
      "https://media.licdn.com/dms/image/D4E03AQENUjns6h776A/profile-displayphoto-shrink_400_400/0/1673187017917?e=1713398400&v=beta&t=dE5mvM-Fl-lWyOB2cF5bc-o3tPmW0A3oobjV0wQ9wWg",
  },
  {
    id: 3,
    name: "Benjamin Frenal",
    designation: "Développeur Web Full Stack",
    image:
      "https://media.licdn.com/dms/image/D4E03AQHw2VBWOlQG-g/profile-displayphoto-shrink_800_800/0/1704637451271?e=1713398400&v=beta&t=1S4lET05_cB0BK090u02X7PAfskM9lL6POJ4BOTrB7s",
  },

 
];

export function Equipe() {
  return (
    <>
      <div className={styles.technologie}>
        <div className={styles.title__container}>
          <h2>Equipe</h2>
          <span className={styles.divider}></span>
        </div>
        <small>Sans oublier les créateurs :)</small>

        <div className={styles.container__equipe}>
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </>
  );
}
