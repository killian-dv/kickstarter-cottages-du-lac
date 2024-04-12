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
        <svg
          width="109"
          height="68"
          viewBox="0 0 363 228"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M95.232 65.664H22.016V87.68H95.232V109.568H22.016V131.584H95.232V153.6H0V43.776H95.232V65.664ZM336.982 43.776L283.606 98.688L336.982 153.6H306.39L263.638 109.568V153.6H241.75V43.776H263.638V87.68L306.39 43.776H336.982Z"
            fill="#F6F6F6"
          />
          <path
            d="M216.107 76.672C216.107 88.832 206.251 98.688 194.219 98.688C206.251 98.688 216.107 108.544 216.107 120.576V131.584C216.107 143.744 206.251 153.6 194.091 153.6H142.763H120.875V43.776H194.091C206.251 43.776 216.107 53.632 216.107 65.664V76.672ZM142.763 65.664V87.68H183.595C189.355 87.68 194.091 82.944 194.091 77.056V70.656C194.091 67.968 191.915 65.664 189.227 65.664H142.763ZM194.091 126.592V120.192C194.091 114.304 189.355 109.568 183.595 109.568H142.763V131.584H189.227C191.915 131.584 194.091 129.408 194.091 126.592Z"
            fill="#32FBB3"
          />
          <path
            d="M7.13703 179.68V214H0.257034V179.68H7.13703ZM56.6198 179.68V214H49.7398V192.52L41.0198 208.84H35.5398L26.8198 192.52V214H19.9398V179.68H27.6998L38.2598 199.44L48.8198 179.68H56.6198ZM106.107 179.68V214H99.2273V192.52L90.5073 208.84H85.0273L76.3073 192.52V214H69.4273V179.68H77.1873L87.7473 199.44L98.3073 179.68H106.107ZM148.675 186.52H125.795V193.4H148.675V200.24H125.795V207.12H148.675V214H118.915V179.68H148.675V186.52ZM191.248 193.4C191.248 197.2 188.208 200.24 184.408 200.24H177.928L191.248 214H181.688L168.368 200.24V214H161.488V179.68H184.408C188.208 179.68 191.248 182.76 191.248 186.52V193.4ZM182.848 193.4C183.728 193.4 184.408 192.72 184.408 191.84V188.08C184.408 187.24 183.728 186.52 182.848 186.52H168.368V193.4H182.848ZM212.462 186.52C211.622 186.52 210.902 187.24 210.902 188.08V191.84C210.902 192.72 211.622 193.4 212.462 193.4H226.942C230.742 193.4 233.822 196.48 233.822 200.24V207.12C233.822 210.92 230.742 214 226.942 214H204.062V207.12H225.422C226.262 207.12 226.942 206.44 226.942 205.56V201.8C226.942 200.96 226.262 200.24 225.422 200.24H210.902C207.142 200.24 204.062 197.2 204.062 193.4V186.52C204.062 182.76 207.142 179.68 210.902 179.68H233.822V186.52H212.462ZM253.515 179.68V214H246.635V179.68H253.515ZM266.318 186.52C266.318 182.76 269.398 179.68 273.198 179.68H289.238C293.038 179.68 296.118 182.76 296.118 186.52V207.12C296.118 210.92 293.038 214 289.238 214H273.198C269.398 214 266.318 210.92 266.318 207.12V186.52ZM287.678 207.12C288.558 207.12 289.238 206.44 289.238 205.56V188.08C289.238 187.24 288.558 186.52 287.678 186.52H274.758C273.878 186.52 273.198 187.24 273.198 188.08V205.56C273.198 206.44 273.878 207.12 274.758 207.12H287.678ZM331.85 179.68H338.73V214H330.61L315.81 190.56V214H308.93V179.68H317.05L331.85 203.12V179.68Z"
            fill="#F6F6F6"
          />
        </svg>
        <nav>
          <ul className={`${styles.flex}`}>
            <li>
              <a href="#histoire" className={`${styles.hoverUnderline}`}>
                L&apos;Histoire
              </a>
            </li>
            <li>
              <a href="#poc" className={`${styles.hoverUnderline}`}>
                Preuve de Concept
              </a>
            </li>
            <li>
              <a href="#technologies" className={`${styles.hoverUnderline}`}>
                Technologies
              </a>
            </li>
            <li>
              <a href="#objectifs" className={`${styles.hoverUnderline}`}>
                Objectifs
              </a>
            </li>
            <li>
              <a href="#equipe" className={`${styles.hoverUnderline}`}>
                Equipe
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={`${styles.text}`}>
        <h1>Explorez, planifiez, profitez – sans mauvaises surprises !</h1>
        <a
          href="https://cottages-belvedere.vercel.app/"
          target="blank"
          className={`${styles.link}`}
        >
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
          <div
            className={`${styles.info__container__child} ${styles.info__link}`}
          >
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
