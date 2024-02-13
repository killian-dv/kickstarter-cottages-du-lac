import styles from "./Technologie.module.scss";

export function Technologie() {
  return (
    <div className={styles.technologie}>
      <div className={styles.title__container}>
        <h2>Technologies</h2>
        <span className={styles.divider}></span>
      </div>
      <small>Toutes les technologies utilisés lors de ce projet</small>

      <div className={styles.container__technologie}>
        <div className={styles.container__top}>
          <div className={`${styles.card}`}>
            <img
              className={`${styles.img}`}
              src="/assets/image/vitejs.png"
              alt=""
            />
          </div>
          <div className={`${styles.card}`}>
            <img
              className={`${styles.img}`}
              src="/assets/image/reactjs.png"
              alt=""
            />
          </div>
        </div>

        <div className={styles.container__bottom}>
          <div className={`${styles.card}`}>
            <img
              className={`${styles.img}`}
              src="/assets/image/threejs.png"
              alt=""
            />
          </div>
          <div className={`${styles.card}`}>
            <img
              className={`${styles.img}`}
              src="/assets/image/blender.png"
              alt=""
            />
          </div>
          <div className={`${styles.card}`}>
            <img
              className={`${styles.img}`}
              src="/assets/image/lidar.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
