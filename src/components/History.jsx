import { PinContainer } from "./ui/3d-pin";

export function History() {
  return (
    <div className="mt-24 flex flex-col justify-center items-center w-full">
      <div className="w-fit">
        <h2 className="text-3xl">L’histoire</h2>
        <span className="block w-full h-3 bg-primary"></span>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <div>Grid gauche</div>
        <div className="p-12">
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
