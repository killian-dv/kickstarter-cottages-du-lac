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
          <h3>It doesn’t have to be that way.</h3>
          <p>
            Online media is fragmented. Your news, info, and updates come from
            countless sources. Blogs, microblogs, social networks, weather
            alerts, webcomics, earthquake warnings, photos, RSS feeds - it’s all
            out there in a million different places, and you’ve gotta cycle
            through countless different apps and websites to keep up.
          </p>
          <h3>It doesn’t have to be that way.</h3>
          <p>
            Online media is fragmented. Your news, info, and updates come from
            countless sources. Blogs, microblogs, social networks, weather
            alerts, webcomics, earthquake warnings, photos, RSS feeds - it’s all
            out there in a million different places, and you’ve gotta cycle
            through countless different apps and websites to keep up.
          </p>
        </div>
        <div className={styles.right__side}>
          <PinContainer
            title="Cottages du Lac"
            href="https://twitter.com/mannupaaji"
            className="w-full h-full"
          >
            <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-full h-[20rem] aspect-square"></div>
          </PinContainer>
        </div>
      </div>
    </div>
  );
}
