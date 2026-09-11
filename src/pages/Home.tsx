import { useState } from "react";
import { PROJECTS, EXPERIENCE } from "../data";

export default function Home() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="bg-white text-[#0a0a0a]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* HERO */}
      <section className="pt-14 min-h-screen flex flex-col justify-center max-w-[1100px] mx-auto px-6">
        <div className="py-24">
          <h1
            style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.045em", lineHeight: 0.9 }}
            className="text-[clamp(64px,9vw,120px)] font-600 text-black"
          >
            João Vitor Pereira
          </h1>
          <div className="mt-10 flex items-center gap-16">
            <p className="text-[15px] text-[#555] leading-relaxed max-w-[380px]">
              Product • Visual • UX/UI • <strong>DESIGN</strong>
            </p>
          </div>
          <div className="mt-10 flex gap-4">
            <a href="#work" className="px-7 py-3 bg-black text-white text-[12px] font-600 tracking-[0.08em] uppercase hover:bg-[#1a5cff] transition-colors" style={{ fontFamily: "'Geist', sans-serif" }}>
              projetos
            </a>
            <a href="#contact" className="px-7 py-3 border border-black/20 text-[12px] font-600 tracking-[0.08em] uppercase hover:border-[#1a5cff] hover:text-[#1a5cff] transition-colors" style={{ fontFamily: "'Geist', sans-serif" }}>
              contato
            </a>
          </div>
        </div>
        <div className="pb-10 w-full relative">
          <div className="animate-slide-across flex gap-3 w-fit">
            <div className="w-8 h-8 bg-[#1a5cff]" />
            <div className="w-8 h-8 border-2 border-black" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="work" className="pt-16 pb-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="py-6">
            <h2 style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.04em" }} className="text-[36px] font-800">
              Projetos
            </h2>
          </div>
          {PROJECTS.map((p, i) => (
            <div
              key={p.id}
              onMouseEnter={() => p.id !== "03" ? setHovered(i) : undefined}
              onMouseLeave={() => setHovered(null)}
              onClick={() => p.id !== "03" ? window.location.href = `/project/${p.id}` : undefined}
              className={`relative flex gap-8 py-8 border-b border-black/08 items-stretch group ${p.id !== "03" ? "cursor-pointer" : "cursor-default opacity-40"}`}
              style={{ color: "inherit" }}
            >
              <div className="flex-shrink-0 flex flex-col gap-3 w-[160px] md:gap-0">
                <div className="w-[160px] h-[160px] overflow-hidden self-stretch" style={{ minHeight: "160px", border: p.id === "03" ? "1px solid #0a0a0a" : "none", background: p.id === "03" ? "white" : undefined }}>
                  {p.id !== "03" && (
                    <img
                      src={p.img}
                      alt={p.imgAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5 md:hidden">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 border border-black/10 text-[10px] font-500 tracking-[0.06em] uppercase text-[#888]">{t}</span>
                  ))}
                </div>
              </div>

              <div className="flex-1 min-w-0 flex flex-col justify-between py-1">
                <div>
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <div className="flex items-baseline gap-3">
                      <h3 style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.02em" }} className="text-[20px] font-700">
                        {p.title}
                      </h3>
                    </div>
                    <span className={`text-[16px] transition-all duration-150 flex-shrink-0 ${hovered === i ? "translate-x-1 text-[#1a5cff]" : "text-[#535353]"}`}>→</span>
                  </div>
                  <p className="text-[13px] text-[#666] leading-relaxed mb-4 max-w-[520px]">{p.shortDesc}</p>
                </div>
                <div className="hidden md:flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 border border-black/10 text-[10px] font-500 tracking-[0.06em] uppercase text-[#888]">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-24 bg-[#0a0a0a]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="pb-6 border-b border-white/10 mb-0">
            <h2 style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.04em" }} className="text-[36px] font-800 text-white">
              Experiência
            </h2>
          </div>
          {EXPERIENCE.map((e, i) => (
            <div key={i} className="grid md:grid-cols-[1fr_auto] gap-4 py-7 border-b border-white/06">
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 bg-[#1a5cff] flex-shrink-0" />
                <div>
                  <span style={{ fontFamily: "'Geist', sans-serif" }} className="text-[17px] font-700 text-white">{e.role}</span>
                  <span className="text-[14px] text-[#1a5cff] ml-3 font-500">{e.company}</span>
                </div>
              </div>
              <span style={{ fontFamily: "'Geist', sans-serif", color: "#c4c4c4" }} className="text-[12px] pt-0.5">{e.period}</span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
