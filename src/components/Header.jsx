import { Banner } from "@/components/Banner";
import { Button } from "@/components/ui/button";
import headerBackground from "../assets/header-background.webp";

export function Header() {
  return (
    <div
      className="bg-cover bg-center h-[65vh] flex flex-col items-center justify-start rounded-3xl p-8 gap-[15vh]"
      style={{ backgroundImage: `url(${headerBackground})` }}
    >
      <div className="w-full flex justify-between text-white">
        <div className="flex flex-col gap-0">
          <p className="font-extrabold text-xl">Les Cottages</p>
          <span className="uppercase">Belvédère</span>
        </div>
        <nav>
          <ul className="flex gap-4 font-semibold">
            <li>
              <a href="" className="hover:underline">
                L&apos;Histoire
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Preuve de Concept
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Technologies
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Objectifs
              </a>
            </li>
            <li>
              <a href="" className="hover:underline">
                Equipe
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-white max-w-[85%] flex flex-col items-center gap-4">
        <h1 className="text-4xl font-extrabold text-center">
          Trouver le meilleur endroit pour passer du bon temps
        </h1>
        <p>Organisé par Le Belvédère</p>
        <Button variant="default" className="w-fit">
          Découvrir
        </Button>
      </div>
      <Banner className="absolute bottom-0" />
    </div>
  );
}
