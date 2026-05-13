"use client";

import { ProjectItem } from "@/components/ProjectItem";
import { Footer } from "@/components/Footer";

export default function Page() {
  const projects = [
    {
      name: "Opik Studio",
      tech: "Next.js",
      imageSrc: "/images/opik.png",
      link: "https://opik.design",
    },
    {
      name: "Connect App",
      tech: "Next.js, Python",
      imageSrc: "/images/connect.png",
    },
    {
      name: "Gym App",
      tech: "Next.js",
      imageSrc: "/images/gym.png",
      link: "https://github.com/janis-winkelmann/gym-app"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[640px] mx-auto p-8 flex flex-col gap-8">
        <section>
          <p className="text-base text-[#737373] leading-relaxed">
            <span className="text-[#4B4B4B]">Janis Winkelmann</span>. Ich programmiere seit der 2. Klasse – angefangen mit Scratch, mittlerweile habe ich bereits für mehrere Unternehmen Oberflächen konzipiert und entwickelt. Ich beherrsche <span className="text-[#4B4B4B]">Next.js</span> für das Frontend sowie <span className="text-[#4B4B4B]">Python</span> und <span className="text-[#4B4B4B]">Go</span> für das Backend. Meine praktische Erfahrung im Linux- und Server-Management umfasst Debian, Nginx Reverse Proxies, Load-Balancing, Server-Sicherheit, Firewalls und den gesamten technischen Stack. Zudem verfüge ich über <span className="text-[#4B4B4B]">fließende englische Sprachkenntnisse auf C2-Niveau</span>.
          </p>
        </section>

        <section className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectItem
              key={index}
              name={project.name}
              tech={project.tech}
              imageSrc={project.imageSrc}
              link={project.link}
            />
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
}
