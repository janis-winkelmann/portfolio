"use client";

import Image from "next/image";

interface ProjectItemProps {
  name: string;
  tech: string;
  imageSrc: string;
  link?: string;
}

export function ProjectItem({ name, tech, imageSrc, link }: ProjectItemProps) {
  const content = (
    <div className="relative w-full overflow-hidden group p-4 bg-[#FAFAFA]">
      <Image
        src={imageSrc}
        alt={name}
        width={1200}
        height={800}
        sizes="(max-width: 640px) 100vw, 640px"
        className="w-full h-auto object-cover"
      />
      <div className="flex justify-between items-center pt-4">
        <span className="text-base text-[#4B4B4B]">{name}</span>
        <span className="text-base text-[#737373]">{tech}</span>
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-opacity hover:opacity-90"
      >
        {content}
      </a>
    );
  }

  return content;
}
