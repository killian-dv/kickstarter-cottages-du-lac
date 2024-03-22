"use client";
import { ContainerScroll } from "../ui/container-scroll-animation";
import styles from "./Concept.module.scss";
export function Concept() {
  return (
    <div id="poc" className={styles.concept}>
      <div className={styles.title__container}>
        <h2>Preuve de Concept</h2>
        <span className={styles.divider}></span>
      </div>
      <small>Voici un poc pour Les Cottages du Lac</small>

      <div className={styles.container__concept}>
        <span className={styles.projet}>PROJET</span>
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white">
                Unleash the power of <br />
                <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                  Scroll Animations
                </span>
              </h1>
            </>
          }
        />

      </div>
    </div>
  );
}
