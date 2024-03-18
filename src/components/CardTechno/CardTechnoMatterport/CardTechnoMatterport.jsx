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
        Online media is fragmented. Your news, info, and updates come from
        countless sources. Blogs, microblogs, social networks, weather alerts,
        webcomics, earthquake warnings, photos, RSS feeds - it’s all out there
        in a million different places, and you’ve gotta cycle through countless
        different apps and websites to keep up.
      </p>

      <button className={`${styles.close__button}`} onClick={hideCard}>
        <img className={`${styles.img}`} src="/assets/icon/cross.svg" alt="" />
      </button>
    </div>
  );
}
