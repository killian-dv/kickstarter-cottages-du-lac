import styles from "./CardTechnoViteJs.module.scss";

export function CardTechnoViteJs({ isActive, onClose }) {
  const hideCard = () => {
    onClose();
  };
  const cardClassName = `${styles.card} ${isActive ? styles.active : ""}`;

  return (
    <div className={cardClassName}>
      <img className={`${styles.logo}`} src="/assets/image/vitejs.png" alt="" />

      <p>
        Vite.js est un outil de développement rapide et moderne pour la
        construction d'applications web légères et performantes. Basé sur la
        technologie JavaScript, Vite.js offre une expérience de développement
        fluide grâce à sa compilation rapide des fichiers et à son serveur de
        développement intégré. Sa prise en charge native des modules ES6 permet
        une gestion efficace des dépendances, tandis que sa configuration
        minimaliste simplifie le processus de développement. Avec Vite.js, la
        création d'applications web devient rapide, agréable et hautement
        optimisée.
      </p>

      <button className={`${styles.close__button}`} onClick={hideCard}>
        <img className={`${styles.img}`} src="/assets/icon/cross.svg" alt="" />
      </button>
    </div>
  );
}
