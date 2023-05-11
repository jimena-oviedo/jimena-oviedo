import { FiYoutube } from "react-icons/fi";

interface ProjectInfo {
  title: string;
  job: string;
  costumeDesigner: string;
  director: string;
  production: string;
  distribution: string;
  trailerYouTubeLink: string;
}

const PROJECTS_STUB: ProjectInfo[] = [
  {
    title: "The Enigma of Shadows",
    job: "Breakdown Artist",
    costumeDesigner: "Elena Sanchez",
    director: "Michael Anderson",
    production: "Luminary Studios",
    distribution: "Netflix",
    trailerYouTubeLink: "https://www.youtube.com/watch?v=abcdefghijk",
  },
  {
    title: "Midnight Masquerade",
    job: "Dyer",
    costumeDesigner: "Sophie Reynolds",
    director: "Julia Thompson",
    production: "Stellar Pictures",
    distribution: "Amazon Prime",
    trailerYouTubeLink: "https://www.youtube.com/watch?v=lmnopqrstuv",
  },
  {
    title: "The Art of Disguise",
    job: "Breakdown Artist Team Lead",
    costumeDesigner: "David Rodriguez",
    director: "Olivia Garcia",
    production: "Imagination Studios",
    distribution: "Disney+",
    trailerYouTubeLink: "https://www.youtube.com/watch?v=wxyzabcdefg",
  },
  {
    title: "Threads of Eternity",
    job: "Costume Fabricator",
    costumeDesigner: "Isabella Martinez",
    director: "Gabriel Johnson",
    production: "Majestic Productions",
    distribution: "Hulu",
    trailerYouTubeLink: "https://www.youtube.com/watch?v=hijklmnopqr",
  },
  {
    title: "Silk and Satin",
    job: "Dyeing Technician",
    costumeDesigner: "Daniel Thompson",
    director: "Emma Wilson",
    production: "CineMagic Studios",
    distribution: "Netflix",
    trailerYouTubeLink: "https://www.youtube.com/watch?v=stuvwxzyab",
  },
  {
    title: "Seams of Destiny",
    job: "Costume Breakdown Specialist",
    costumeDesigner: "Sophia Adams",
    director: "Lucas Hernandez",
    production: "Epic Pictures",
    distribution: "Amazon Prime",
    trailerYouTubeLink: "https://www.youtube.com/watch?v=ijklmnopqrs",
  },
  {
    title: "Stitched in Time",
    job: "Dyeing Assistant",
    costumeDesigner: "Liam Campbell",
    director: "Ava Roberts",
    production: "Timeless Films",
    distribution: "Disney+",
    trailerYouTubeLink: "https://www.youtube.com/watch?v=tuvwxyzaaaa",
  },
  {
    title: "The Costumed Chronicles",
    job: "Costume Pattern Maker",
    costumeDesigner: "Emily Foster",
    director: "Nathan Ramirez",
    production: "Visionary Studios",
    distribution: "Netflix",
    trailerYouTubeLink: "https://www.youtube.com/watch?v=bbbbbbbbbb",
  },
];

interface Props {
  project: ProjectInfo;
}

function Project({ project }: Props) {
  return (
    <article className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8">
      <figure className="sm:basis-1/2 lg:basis-7/12 flex-grow-1 flex-shrink-0">
        <img
          className="block h-full w-full object-cover object-center"
          src={`https://picsum.photos/seed/${project.title}/300/180?blur`}
        />
      </figure>
      <aside className="mt-1 sm:mt-1 lg:mt-3">
        <h2 className="font-sans text-lg lg:text-xl pb-1 lg:pb-2 font-bold leading-normal">
          {project.title} — {project.job}
        </h2>
        <div className="text-gray-600 text-sm lg:text-base leading-normal">
          <p>Costume designer: {project.costumeDesigner}</p>
          <p>Direction: {project.director}</p>
          <p>Production: {project.production}</p>
          <p>Distribution: {project.production}</p>
          <p>
            <FiYoutube className="inline" />{" "}
            <a
              className="hover:underline"
              href={project.trailerYouTubeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Trailer
            </a>
          </p>
        </div>
      </aside>
    </article>
  );
}

export function ProjectsPage() {
  return (
    <section className="flex flex-col gap-14">
      {PROJECTS_STUB.map((project) => (
        <Project project={project} />
      ))}
    </section>
  );
}
