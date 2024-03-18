import { useState } from "react";
import { CardTechnoBlender } from "../CardTechno/CardTechnoBlender/CardTechnoBlender";
import { CardTechnoMatterport } from "../CardTechno/CardTechnoMatterport/CardTechnoMatterport";
import { CardTechnoReactJs } from "../CardTechno/CardTechnoReactJs/CardTechnoReactJs";
import { CardTechnoThreeJs } from "../CardTechno/CardTechnoThreeJs/CardTechnoThreeJs";
import { CardTechnoViteJs } from "../CardTechno/CardTechnoViteJs/CardTechnoViteJs";
import styles from "./Technologie.module.scss";

export function Technologie() {
  const [isViteJsActive, setIsViteJsActive] = useState(false);
  const [isReactJsActive, setIsReactJsActive] = useState(false);
  const [isThreeJsActive, setIsThreeJsActive] = useState(false);
  const [isBlenderActive, setIsBlenderActive] = useState(false);
  const [isMatterportActive, setIsMatterportActive] = useState(false);

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

  const showCardMatterport = () => {
    setIsMatterportActive(true);
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
  };

  const closeCardMatterport = () => {
    setIsMatterportActive(false);
  };

  return (
    <>
      <div id="technologies" className={styles.technologie}>
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
            <div className={`${styles.card}`} onClick={showCardMatterport}>
              <img
                className={`${styles.img}`}
                src="/assets/image/matterport.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <CardTechnoViteJs isActive={isViteJsActive} onClose={closeCardVite} />
      <CardTechnoReactJs isActive={isReactJsActive} onClose={closeCardReact} />
      <CardTechnoThreeJs isActive={isThreeJsActive} onClose={closeCardThree} />
      <CardTechnoBlender
        isActive={isBlenderActive}
        onClose={closeCardBlender}
      />
      <CardTechnoMatterport
        isActive={isMatterportActive}
        onClose={closeCardMatterport}
      />
    </>
  );
}
