import React from "react";
import styles from "./Objectif.module.scss";

export function Objectif({ percentage }) {
  const clampedPercentage = Math.max(0, Math.min(100, percentage));

  const circumference = 2 * Math.PI * 50;
  const strokeDasharray = `${
    (clampedPercentage / 100) * circumference
  } ${circumference}`;

  return (
    <>
      <div id="objectifs" className={styles.objectif}>
        <div className={styles.container__objectif}>
          <div className={styles.title__container}>
            <h2>Objectifs</h2>
            <span className={styles.divider}></span>
          </div>
          <small>Nous avons pour objectifs...</small>

          <div className={styles.container__objectif__rate}>
            <div className={styles.box}>
              <div className={styles.circle__bg}></div>
              <svg>
                <circle cx={"130px"} cy={"130px"} r={"130px"}></circle>
              </svg>
              <div className={styles.circle__text}>
                <span>3 732€</span>
                <span>/ 100 000€</span>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.container__step}>
                <img
                  className={`${styles.icon}`}
                  src="/assets/icon/croix.svg"
                  alt=""
                />
                <p>
                  <span>5 000 €</span>
                  Ajout de la visualisation en réalité augmentée
                </p>
              </div>
              <div className={styles.container__step}>
                <img
                  className={`${styles.icon}`}
                  src="/assets/icon/croix.svg"
                  alt=""
                />
                <p>
                  <span>45 000 €</span>
                  Achat d'un drone avec caméra Lidar pour la modélisation 3D +
                  passage de la formation de pilote de drone
                </p>
              </div>{" "}
              <div className={styles.container__step}>
                <img
                  className={`${styles.icon}`}
                  src="/assets/icon/croix.svg"
                  alt=""
                />
                <p>
                  <span>100 000 €</span>
                  Développement d’une IA pouvant modifier le style de la
                  modélisation 3D suivant les demandes du client (low poly,
                  réaliste...)
                </p>
              </div>{" "}
              <div className={styles.container__step}>
                <img
                  className={`${styles.icon}`}
                  src="/assets/icon/croix.svg"
                  alt=""
                />
                <p>
                  <span>200 000 €</span>
                  Création de notre propre plateforme de réservation de logement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
