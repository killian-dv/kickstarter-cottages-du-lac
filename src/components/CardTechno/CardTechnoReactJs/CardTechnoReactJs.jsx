import styles from "./CardTechnoReactJs.module.scss";

export function CardTechnoReactJs({ isActive, onClose }) {
  const hideCard = () => {
    onClose();
  };

  const cardClassName = `${styles.card} ${isActive ? styles.active : ""}`;

  return (
    <div className={cardClassName}>
      <img
        className={`${styles.logo}`}
        src="/assets/image/reactjs.png"
        alt=""
      />

      <p>
        React est une bibliothèque JavaScript open-source, conçue pour la
        création d'interfaces utilisateur interactives et dynamiques. Développée
        par Facebook, React se distingue par sa gestion efficace du rendu des
        composants, grâce à sa virtual DOM. Cette approche permet des mises à
        jour rapides et optimisées de l'interface utilisateur, garantissant
        ainsi des performances élevées même pour les applications les plus
        complexes. Avec sa syntaxe déclarative et sa modularité, React offre une
        flexibilité exceptionnelle aux développeurs, facilitant ainsi la
        création d'applications web modernes et évolutives.
      </p>

      <button className={`${styles.close__button}`} onClick={hideCard}>
        <img className={`${styles.img}`} src="/assets/icon/cross.svg" alt="" />
      </button>
    </div>
  );
}
