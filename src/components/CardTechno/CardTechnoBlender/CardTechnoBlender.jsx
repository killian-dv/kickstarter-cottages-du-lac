import styles from "./CardTechnoBlender.module.scss";

export function CardTechnoBlender({ isActive, onClose }) {
  const hideCard = () => {
    onClose();
  };
  const cardClassName = `${styles.card} ${isActive ? styles.active : ""}`;

  return (
    <div className={cardClassName}>
      <img
        className={`${styles.logo}`}
        src="/assets/image/blender.png"
        alt=""
      />

      <p>
        Blender est un logiciel de modélisation, d'animation et de rendu 3D
        libre et open-source. Doté d'une suite complète d'outils de création,
        Blender offre une flexibilité incomparable pour la réalisation de
        projets 3D, qu'il s'agisse de films d'animation, d'effets visuels, de
        jeux vidéo ou de modèles architecturaux. Avec sa communauté dynamique et
        son développement actif, Blender continue d'évoluer pour répondre aux
        besoins des artistes et des développeurs du monde entier, faisant de lui
        un choix privilégié pour la création de contenus 3D de qualité
        professionnelle.
      </p>

      <button className={`${styles.close__button}`} onClick={hideCard}>
        <img className={`${styles.img}`} src="/assets/icon/cross.svg" alt="" />
      </button>
    </div>
  );
}
