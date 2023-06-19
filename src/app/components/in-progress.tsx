import ImgInProgress from "../../../public/website-builder.svg";
import Image from "next/image";

export default function InProgress() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-8 text-3xl font-semibold text-gray-600">
        O Dev Point está em construção...
      </h1>
      <Image src={ImgInProgress.src} alt="" width={256} height={256} />
      <p className="mt-8 text-lg text-gray-500">
        Em breve, você poderá encontrar vagas e desenvolvedores por aqui!
      </p>
      <p className="mt-8 text-lg text-gray-500">
        Se quiser ter um <b className="text-indigo-600">spoiler</b>, clique em{" "}
        <b className="font-bold text-indigo-600">Devs</b> no menu.
      </p>
    </div>
  );
}
