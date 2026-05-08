"use client";

export function Footer() {
  return (
    <footer className="w-full flex justify-between items-start py-8 mt-8 border-t border-[#F5F5F5]">
      <div className="flex flex-col gap-2">
        <span className="text-base text-[#4B4B4B]">Janis Winkelmann</span>
        <a href="mailto:winkelmannjanis@pm.me" className="text-base text-[#737373] hover:opacity-80 transition-opacity">
          winkelmannjanis@pm.me
        </a>
      </div>
      <div className="flex flex-col items-end gap-2">
        <a href="https://github.com/janis-winkelmann" target="_blank" rel="noopener noreferrer" className="text-base text-[#737373] hover:opacity-80 transition-opacity">
          Github
        </a>
        <a href="https://x.com/janiswinkelmann" target="_blank" rel="noopener noreferrer" className="text-base text-[#737373] hover:opacity-80 transition-opacity">
          Twitter
        </a>
      </div>
    </footer>
  );
}
