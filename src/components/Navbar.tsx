import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const NAV_ITEMS = [
  { id: "work", label: "projetos" },
  { id: "experience", label: "experiência" },
  { id: "contact", label: "contato" },
];

function useScrollSpy(enabled: boolean) {
  const [active, setActive] = useState("");
  useEffect(() => {
    if (!enabled) return;
    const handler = () => {
      for (const { id } of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) { setActive(id); return; }
      }
      setActive("");
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [enabled]);
  return active;
}

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const active = useScrollSpy(isHome);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black/08 bg-white/95" style={{ backdropFilter: "blur(8px)" }}>
      <div className="max-w-[1100px] mx-auto px-6 h-14 flex items-center justify-between">
        <a href="/" style={{ fontFamily: "'Geist', sans-serif" }} className="text-[13px] font-600 tracking-[0.14em] uppercase text-black no-underline">
          JVPEREIRADESIGN
        </a>
        <div className="flex items-center gap-8">
          {NAV_ITEMS.map(({ id, label }) => (
            <a
              key={id}
              href={isHome ? `#${id}` : `/#${id}`}
              className="text-[12px] font-500 tracking-[0.08em] uppercase transition-colors no-underline"
              style={{ color: active === id ? "#1a5cff" : "#888" }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
