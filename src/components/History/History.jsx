import { PinContainer } from "../ui/3d-pin";
import styles from "./History.module.scss";

export function History() {
  return (
    <div className={styles.history}>
      <div className={styles.title__container}>
        <h2>L’histoire</h2>
        <span className={styles.divider}></span>
      </div>
      <small>Découvrez comment notre startup à vu le jour</small>

      <div className={styles.container__histoire}>
        <div className={styles.left__side}>
          <h3>
            Découvrez EBK Immersion : Explorez vos vacances avant de les vivre !
          </h3>
          <p>
            Rappelez-vous cette fois où votre location de rêve sur Airbnb ne
            correspondait pas du tout à ce que vous aviez vu en ligne ? C'est la
            malheureuse aventure qui nous est arrivée en réservant un logement
            sur Airbnb pour nos vacances. Les pièces étaient plus petites, la
            piscine aussi, l'agencement de la cuisine n'était pas pratique...
            C'est en revenant de ces vacances que nous avons eu l'idée de créer
            EBK Immersion, une startup qui propose à ses clients la modélisation
            du site et de ses alentours, ainsi que les visualisations 3D des
            logements de vacances.
          </p>
          <p>
            Grâce à des technologies de réalité virtuelle et de modélisation 3D
            avancées, explorez chaque coin de votre logement de vacances,
            visualisez son agencement, ses équipements, et même l'ambiance qui y
            règne. Fini les mauvaises surprises à votre arrivée ! De plus, grâce
            à notre intégration de commerces locaux, préparez votre séjour de
            manière complète et immersive.
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
