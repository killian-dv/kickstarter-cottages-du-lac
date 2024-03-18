import styles from "./CardTechnoThreeJs.module.scss";

export function CardTechnoThreeJs({ isActive, onClose }) {
  const hideCard = () => {
    onClose();
  };

  const cardClassName = `${styles.card} ${isActive ? styles.active : ""}`;

  return (
    <div className={cardClassName}>
      <img
        className={`${styles.logo}`}
        src="/assets/image/threejs.png"
        alt=""
      />

      <p>
        Three.js est une bibliothèque JavaScript 3D qui permet de créer des
        expériences interactives et immersives directement dans le navigateur
        web. Grâce à sa simplicité d'utilisation et à sa puissance, Three.js
        ouvre de nouvelles perspectives en matière de développement web en
        permettant la création d'animations 3D, de visualisations de données
        complexes et de jeux en ligne captivants. Avec sa large gamme de
        fonctionnalités et sa communauté active, Three.js est l'outil idéal pour
        donner vie à vos idées les plus créatives en 3D sur le web.
      </p>

      <button className={`${styles.close__button}`} onClick={hideCard}>
        <img className={`${styles.img}`} src="/assets/icon/cross.svg" alt="" />
      </button>
    </div>
  );
}
