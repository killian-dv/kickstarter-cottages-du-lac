import styles from "./Footer.module.scss";
import logo from "/assets/image/logo.png";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container__row}>
        <div className={styles.row}>
          <div className={styles.item}>
            <img src={logo} alt="logo belvédère" />
          </div>
          <div className={styles.item}>
            <h3>Les Cottages du Belvédère</h3>
            <p>9 Rue des Cottages de Port Mesni, 10140 Mesnil-Saint-Père</p>
          </div>
          <div className={styles.item}>
            <h3>Nous contacter</h3>
            <p>Par mail : contact@lescottagesdubelvedere.com</p>
            <p>Par téléphone: +33 (0)7 52 05 57 74</p>
          </div>
        </div>
      </div>
    </div>
  );
}
