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
                <span>750€</span>
                <span>/ 1 000€</span>
              </div>
            </div>
            <div className={styles.step}>
              <div className={styles.container__step}>
                <img
                  className={`${styles.icon}`}
                  src="/assets/icon/check.svg"
                  alt=""
                />
                <p>
                  <span> 0 €</span>
                  Preuve de concept
                </p>
              </div>
              <div className={styles.container__step}>
                <img
                  className={`${styles.icon}`}
                  src="/assets/icon/croix.svg"
                  alt=""
                />
                <p>
                  <span>2 000 €</span>What if you had one app that gave an
                  overview of nearly everything that was happening acros{" "}
                </p>
              </div>
              <div className={styles.container__step}>
                <img
                  className={`${styles.icon}`}
                  src="/assets/icon/croix.svg"
                  alt=""
                />
                <p>
                  <span>4 000 €</span>What if you had one app that gave an
                  overview of nearly everything that was happening acros{" "}
                </p>
              </div>{" "}
              <div className={styles.container__step}>
                <img
                  className={`${styles.icon}`}
                  src="/assets/icon/croix.svg"
                  alt=""
                />
                <p>
                  <span>8 000 €</span>What if you had one app that gave an
                  overview of nearly everything that was happening acros{" "}
                </p>
              </div>{" "}
              <div className={styles.container__step}>
                <img
                  className={`${styles.icon}`}
                  src="/assets/icon/croix.svg"
                  alt=""
                />
                <p>
                  <span>12 000 €</span>What if you had one app that gave an
                  overview of nearly everything that was happening acros{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
