import type { FabricaProject } from "@/types/fabrica-framer-media";
import { ProjectCard } from "./ProjectCard";

const PROJECTS: FabricaProject[] = [
  {
    name: "Boltshift",
    year: "2025",
    image: "TQUaM9GTresksymLH16ncQaPo.jpg",
    logo: "uesNBJIRG5fZ2tDJzkhxXbuauQw.svg",
    logoAlt: "Boltshift logo",
  },
  {
    name: "Ephemeral",
    year: "2025",
    image: "r3DvXiPExOamPrqqTNfWM1K9o4.jpg",
    logo: "PyQzA1IF3BF1gkVO1xuZHClY0c.svg",
    logoAlt: "Ephemeral logo",
  },
  {
    name: "Powersurge",
    year: "2024",
    image: "UPqJOHQLdYtNuK2jee5437Lno.jpg",
    logo: "",
    logoAlt: "Powersurge logo",
  },
  {
    name: "Mastermail",
    year: "2024",
    image: "HlvuJF9yIQ3Q8fP86EjFIq5ExE.jpg",
    logo: "",
    logoAlt: "Mastermail logo",
  },
  {
    name: "Warpspeed",
    year: "2023",
    image: "0KGHRsvK3go8kOWricmADe0VWs.jpg",
    logo: "JLzkuHlsyLa7VHaiV3ZJ16kiHhg.svg",
    logoAlt: "Warpspeed logo",
  },
  {
    name: "CloudWatch",
    year: "2020",
    image: "qiCYd5j7XEmvyt9BpMldI3mNm8.jpg",
    logo: "zCY9SAfJ5gqVMOvrM5dzywwbU.svg",
    logoAlt: "CloudWatch logo",
  },
];

export function ProjectsSection() {
  return (
    <section className="bg-[#f5f5f5] px-9 pt-16 pb-24">
      <div className="mb-10 flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-end">
        <div>
          <p className="mb-4 text-base text-black/40">(27)</p>
          <h2 className="text-[40px] leading-[0.95] font-semibold tracking-[-0.03em] text-black md:text-[80px] lg:text-[144px] lg:leading-[0.92] lg:tracking-[-0.06em]">
            Projects.
          </h2>
          <p className="mt-2 text-2xl font-medium text-black md:mt-4 md:text-[30px]">©2025</p>
        </div>
        <p className="max-w-[280px] text-base text-black/50 md:text-right">
          We&apos;ve helped businesses across industries achieve their goals. Here are some of
          our recent projects.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
