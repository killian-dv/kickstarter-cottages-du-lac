import CountUp from "react-countup";
import styles from "./Header.module.scss";

export function Header() {
  return (
    <div className={`${styles.container}`}>
      <img
        className={`${styles.img}`}
        src="/assets/image/header-background.webp"
        alt=""
      />
      <div className={`${styles.navbar}`}>
        <div className={`${styles.logo}`}>
          <p className={`${styles.logo__primary}`}>Les Cottages</p>
          <span className={`${styles.logo__secondary}`}>Belvédère</span>
        </div>
        <nav>
          <ul className={`${styles.flex}`}>
            <li>
              <a href="" className={`${styles.hoverUnderline}`}>
                L&apos;Histoire
              </a>
            </li>
            <li>
              <a href="" className={`${styles.hoverUnderline}`}>
                Preuve de Concept
              </a>
            </li>
            <li>
              <a href="" className={`${styles.hoverUnderline}`}>
                Technologies
              </a>
            </li>
            <li>
              <a href="" className={`${styles.hoverUnderline}`}>
                Objectifs
              </a>
            </li>
            <li>
              <a href="" className={`${styles.hoverUnderline}`}>
                Equipe
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${styles.text}`}>
        <h1>Trouver le meilleur endroit pour passer du bon temps</h1>
        <small>Organisé par Le Belvédère</small>
        <a href="#" className={`${styles.link}`}>
          Découvrir
        </a>
      </div>

      <div className={`${styles.banner}`}>
        <div className={styles.info__container}>
          <div className={styles.info__container__child}>
            <div className={`${styles.info__item} ${styles.first}`}>
              <CountUp
                start={0}
                end={3732}
                duration={3}
                separator=" "
                suffix=" €"
              />
              <p>Objectif de 100000 €</p>
            </div>
          </div>
          <div className={styles.info__container__child}>
            <div className={styles.info__item}>
              <CountUp start={0} end={2461} duration={3} />
              <p>Contributeurs</p>
            </div>
          </div>
          <div className={styles.info__container__child}>
            <div className={styles.info__item}>
              <CountUp start={0} end={22} duration={3} />
              <p>Jours avant la fin</p>
            </div>
          </div>
          <div className={styles.info__container__child}>
            <a href="#" className={`${styles.link}`}>
              Soutenir ce projet
            </a>
          </div>
        </div>
      </div>
      {/* <Banner className={`${styles.absolute}`} /> */}
    </div>
  );
}
