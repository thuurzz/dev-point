import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

type Person = {
  id: string;
  name: string;
  specialization: string;
  professionalDescription: string;
  linkedin: string;
  email: string;
  whatsapp: string;
  github: string;
  image: string;
  lastSeenDateTime: string;
  lastSeen: string;
};

export default function People() {
  const people: Person[] = [
    {
      id: uuidv4(),
      name: "Arthur Vinicius (thuurzz)",
      email: "thuur.vss@gmail.com",
      specialization: "Desenvolvedor Fullstack",
      professionalDescription:
        "Desenvolvedor de aplicações web com foco em React com Next.js e backend NodeJS.",
      image: "https://image-assets-4-app.s3.amazonaws.com/assets/arthur.jpeg",
      linkedin: "https://www.linkedin.com/in/arthurv-silva/",
      github: "https://github.com/thuurzz",
      whatsapp: "11967933291",
      lastSeenDateTime: "2021-10-10T00:00:00.000Z",
      lastSeen: "",
    },
    {
      id: uuidv4(),
      name: "Larissa Ionafa (y0naha)",
      email: "larissa.ionafa@aluno.faculdadeimpacta.com.br",
      specialization: "Desenvolvedor Fullstack",
      professionalDescription:
        "Desenvolvedora de aplicações web com foco em React e backend NodeJS e AWS Lambda.",
      image: "https://image-assets-4-app.s3.amazonaws.com/assets/lari.jpeg",
      linkedin: "https://www.linkedin.com/in/larissa-ionafa/",
      github: "https://github.com/y0naha",
      whatsapp: "11982945610",
      lastSeenDateTime: "2021-10-10T00:00:00.000Z",
      lastSeen: "1 day ago",
    },
    {
      id: uuidv4(),
      name: "Lucas Santos (cabel udin)",
      email: "lucas@aluno.faculdadeimpacta.com.br",
      specialization: "Desenvolvedor Backend",
      professionalDescription:
        "Desenvolvedor de aplicações backend com foco em Java com Spring, Quarkus experiencia com AWS e conceitos avançados de mensageira.",
      image: "https://image-assets-4-app.s3.amazonaws.com/assets/lucas.jpeg",
      linkedin: "https://www.linkedin.com/in/lucas-silvs/",
      github: "https://github.com/lucas-silvs",
      whatsapp: "11943692079",
      lastSeenDateTime: "2021-10-10T00:00:00.000Z",
      lastSeen: "",
    },
  ];

  return (
    <>
      <div className="m-4 lg:flex lg:flex-1 lg:justify-start">
        <a href="/" className="text-md font-semibold leading-6 text-gray-900">
          <span aria-hidden="true">&larr;</span> Voltar
        </a>
      </div>

      {people.map((person) => (
        <div className="m-4 rounded-lg bg-white p-4 shadow-md" key={person.id}>
          <div className="flex-col content-center items-center">
            <ul role="list" className="m-4">
              <li className="flex-col items-center justify-center">
                <div className="flex gap-x-4">
                  <Image
                    className={`h-24 w-24 flex-none rounded-full ${
                      person.lastSeen
                        ? "border-4 border-gray-300"
                        : "border-4 border-emerald-400"
                    } bg-gray-50 object-cover`}
                    src={person.image}
                    alt=""
                    width={128}
                    height={128}
                  />
                  <div className="min-w-0 flex-auto">
                    <p className="text-lg font-semibold leading-6 text-gray-600">
                      {person.name}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {person.email}
                    </p>
                    <p className="text-md mt-4 leading-5 text-gray-600">
                      {person.professionalDescription}
                    </p>
                  </div>
                </div>
                <div className="mt-8 flex justify-between">
                  <div className="flex justify-between gap-4">
                    <div className="mt-4">
                      <a
                        href={person.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md rounded-md bg-neutral-100 p-2 font-semibold leading-5 text-neutral-500 sm:items-start sm:text-sm"
                      >
                        🐙 Github
                      </a>
                    </div>
                    <div className="mt-4">
                      <a
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md rounded-md bg-blue-100 p-2 font-semibold leading-5 text-blue-500 sm:items-start sm:text-sm"
                      >
                        👔 LinkedIn
                      </a>
                    </div>
                    <div className="mt-4">
                      <a
                        href={`https://wa.me/55${person.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md rounded-md bg-green-100 p-2 font-semibold leading-5 text-green-500 sm:items-start sm:text-sm"
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                    <div className="mt-4">
                      <a
                        href={`mailto:${person.email}?subject=Contato pela Dev Point&body=Olá, ${person.name}! Encontrei seu contato pela Dev Point e gostaria de conversar com você.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-md rounded-md bg-red-100 p-2 font-semibold leading-5 text-red-500 sm:items-start sm:text-sm"
                      >
                        ✉️ E-mail
                      </a>
                    </div>
                  </div>

                  <div className="hidden sm:flex sm:flex-col sm:items-end">
                    <p className="text-sm leading-6 text-gray-600">
                      {person.specialization}
                    </p>
                    {person.lastSeen ? (
                      <p className="mt-1 text-xs leading-5 text-gray-500">
                        Last seen{" "}
                        <time dateTime={person.lastSeenDateTime}>
                          {person.lastSeen}
                        </time>
                      </p>
                    ) : (
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs leading-5 text-gray-500">
                          Online
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
