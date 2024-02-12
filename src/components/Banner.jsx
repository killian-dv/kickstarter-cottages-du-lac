import { Button } from "@/components/ui/button";

export function Banner() {
  return (
    <div className="bg-white flex items-center justify-center p-6 rounded-3xl w-9/12 h-24 absolute bottom-0 translate-y-1/2 drop-shadow-md">
      <div className="flex flex-row w-full divide-x-2 divide-slate-200">
        <div className="flex-1 flex justify-center items-center flex-col ">
          <p className="text-secondary-foreground font-bold text-2xl">
            24 356€
          </p>
          <span>Objectif de 100000 €</span>
        </div>
        <div className="flex-1 flex justify-center items-center flex-col">
          <p className="text-secondary-foreground font-bold text-2xl">2 461</p>
          <span>Contributeurs</span>
        </div>
        <div className="flex-1 flex justify-center items-center flex-col">
          <p className="text-secondary-foreground font-bold text-2xl">22</p>
          <span>Jours avant la fin</span>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Button>Soutenir ce projet</Button>
        </div>
      </div>
    </div>
  );
}
