import { PinContainer } from "../ui/3d-pin";
import styles from "./History.module.scss";

export function History() {
  return (
    <div className={styles.history}>
      <div className={styles.title__container}>
        <h2>L’histoire</h2>
        <span className={styles.divider}></span>
      </div>
      <small>Découvrez comment ce projet à vu le jour</small>

      <div className={styles.container__histoire}>
        <div className={styles.left__side}>
          <h3>
            Découvrez les Cottages du Lac au cœur de la nature préservée !
          </h3>
          <p>
            Les cottages du lac, nichés au cœur du Parc Naturel régional de la
            Forêt d&apos;Orient, offrent une expérience authentique et
            conviviale dans un cadre naturel préservé. Chaque cottage, tel que
            La Canopée, L&apos;Herbier, Les Marais, Les Galets et Les Étangs,
            possède son propre charme et est situé à seulement 100 mètres du
            port. Ces havres de paix confortables sont idéaux pour des escapades
            entre amis, à seulement 1h30 de Paris.
          </p>
          <p>
            En plus des activités nautiques et des balades à vélo disponibles
            sur place, la région offre également la possibilité de visiter des
            monuments historiques tels que le château de Vaux et la ville de
            Troyes, ainsi que des attractions telles que Nigloland. Pour
            Philippe Carillon, propriétaire des cottages, cet endroit a une
            signification toute particulière, étant un lieu cher à son cœur
            depuis son enfance.
          </p>
        </div>
        <div className={styles.right__side}>
          <PinContainer
            title="Cottages du Lac"
            href="https://www.google.com/maps/dir/?api=1&destination={Les+Cottages+du+Belv%C3%A9d%C3%A8re,+face+au+Lac+de+la+For%C3%AAt+d'Orient,+9+Rue+des+Cottages+de+Port+Mesni,+10140+Mesnil-Saint-P%C3%A8re}"
            className="w-full h-full"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full h-[20rem] aspect-square"></div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}
