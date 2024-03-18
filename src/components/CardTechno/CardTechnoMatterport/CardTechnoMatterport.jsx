import styles from "./CardTechnoMatterport.module.scss";

export function CardTechnoMatterport({ isActive, onClose }) {
  const hideCard = () => {
    onClose();
  };
  const cardClassName = `${styles.card} ${isActive ? styles.active : ""}`;

  return (
    <div className={cardClassName}>
      <img
        className={`${styles.logo}`}
        src="/assets/image/matterport.png"
        alt=""
      />

      <p>
        Matterport est une plateforme de création de visites virtuelles
        immersives en 3D, conçue pour les professionnels de l'immobilier, de la
        construction et du design. Grâce à sa technologie de numérisation
        avancée, Matterport permet de capturer des espaces réels avec une
        précision remarquable, offrant ainsi aux utilisateurs une expérience
        immersive unique. Que ce soit pour la visualisation de biens
        immobiliers, la planification de projets de construction ou la
        présentation de designs intérieurs, Matterport offre une solution
        complète et intuitive pour créer, partager et explorer des
        environnements 3D de manière réaliste et engageante.
      </p>

      <button className={`${styles.close__button}`} onClick={hideCard}>
        <img className={`${styles.img}`} src="/assets/icon/cross.svg" alt="" />
      </button>
    </div>
  );
}
