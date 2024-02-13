import React, { useState } from "react";
import { CardTechnoViteJs } from "../CardTechno/CardTechnoViteJs/CardTechnoViteJs";
import { CardTechnoReactJs } from "../CardTechno/CardTechnoReactJs/CardTechnoReactJs";
import { CardTechnoThreeJs } from "../CardTechno/CardTechnoThreeJs/CardTechnoThreeJs";
import { CardTechnoBlender } from "../CardTechno/CardTechnoBlender/CardTechnoBlender";
import { CardTechnoLidar } from "../CardTechno/CardTechnoLidar/CardTechnoLidar";
import styles from "./Technologie.module.scss";

export function Technologie() {
  const [isViteJsActive, setIsViteJsActive] = useState(true);
  const [isReactJsActive, setIsReactJsActive] = useState(false);
  const [isThreeJsActive, setIsThreeJsActive] = useState(false);
  const [isBlenderActive, setIsBlenderActive] = useState(false);
  const [isLidarActive, setIsLidarActive] = useState(false);

  const showCardVite = () => {
    setIsViteJsActive(true);
  };

  const showCardReact = () => {
    setIsReactJsActive(true);
  };

  const showCardThree = () => {
    setIsThreeJsActive(true);
  };

  const showCardBlender = () => {
    setIsBlenderActive(true);
  };

  const showCardLidar = () => {
    setIsLidarActive(true);
  };

  const closeCardVite = () => {
    setIsViteJsActive(false);
  };

  const closeCardReact = () => {
    setIsReactJsActive(false);
  };

  const closeCardThree = () => {
    setIsThreeJsActive(false);
  };

  const closeCardBlender = () => {
    setIsBlenderActive(false);
  }

  const closeCardLidar = () => {
    setIsLidarActive(false);
  }


  return (
    <>
      <div className={styles.technologie}>
        <div className={styles.title__container}>
          <h2>Technologies</h2>
          <span className={styles.divider}></span>
        </div>
        <small>Toutes les technologies utilisées lors de ce projet</small>

        <div className={styles.container__technologie}>
          <div className={styles.container__top}>
            <div
              className={`${styles.card} ${styles.card__vitejs}`}
              onClick={showCardVite}
            >
              <img
                className={`${styles.img}`}
                src="/assets/image/vitejs.png"
                alt=""
              />
            </div>
            <div
              className={`${styles.card} ${styles.card__reactjs}`}
              onClick={showCardReact}
            >
              <img
                className={`${styles.img}`}
                src="/assets/image/reactjs.png"
                alt=""
              />
            </div>
          </div>

          <div className={styles.container__bottom}>
            <div className={`${styles.card}`} onClick={showCardThree}>
              <img
                className={`${styles.img}`}
                src="/assets/image/threejs.png"
                alt=""
              />
            </div>
            <div className={`${styles.card}`} onClick={showCardBlender}>
              <img
                className={`${styles.img}`}
                src="/assets/image/blender.png"
                alt=""
              />
            </div>
            <div className={`${styles.card}`} onClick={showCardLidar}>
              <img
                className={`${styles.img}`}
                src="/assets/image/lidar.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <CardTechnoViteJs isActive={isViteJsActive} onClose={closeCardVite} />
      <CardTechnoReactJs isActive={isReactJsActive} onClose={closeCardReact} />
      <CardTechnoThreeJs isActive={isThreeJsActive} onClose={closeCardThree} />
      <CardTechnoBlender isActive={isBlenderActive} onClose={closeCardBlender} />
      <CardTechnoLidar isActive={isLidarActive} onClose={closeCardLidar} />
    </>
  );
}
