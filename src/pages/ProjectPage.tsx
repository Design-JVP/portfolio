import { useParams, Link } from "react-router";
import { PROJECTS } from "../data";

const LETTER_ICONS: Record<string, string> = {
  M: new URL("../imports/icon-M.svg", import.meta.url).href,
  S: new URL("../imports/icon-S.svg", import.meta.url).href,
};

function resolveIcon(slug: string): string {
  if (slug.startsWith("letter:")) return LETTER_ICONS[slug.replace("letter:", "")] ?? "";
  return `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;
}

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="pt-14 min-h-screen flex flex-col items-center justify-center gap-4" style={{ fontFamily: "'Geist', sans-serif" }}>
        <p className="text-[#888] text-[14px]">Projeto não encontrado.</p>
        <Link to="/" className="text-[13px] font-600 underline text-black">← Voltar</Link>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#0a0a0a]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>

      {/* HERO */}
      <section className="pt-14 border-b border-black/08">
        <div className="max-w-[1100px] mx-auto px-6 py-32">
          <Link to="/" className="inline-flex items-center gap-2 text-[11px] font-600 tracking-[0.12em] uppercase text-[#aaa] hover:text-black transition-colors mb-12 no-underline">
            ← Voltar
          </Link>
          <div className="grid md:grid-cols-[1fr_620px] gap-16 items-center">
            <div>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.tags.map((t) => (
                  <span key={t} className="px-2.5 py-0.5 border border-black/10 text-[10px] font-500 tracking-[0.06em] uppercase text-[#888]">{t}</span>
                ))}
              </div>
              <h1
                style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.04em", lineHeight: 1 }}
                className="text-[clamp(40px,6vw,80px)] font-800 text-black mb-6"
              >
                {project.title}
              </h1>
              <p className="text-[15px] text-[#555] leading-relaxed max-w-[440px] mb-8">
                {project.shortDesc}
              </p>
              {project.siteUrl && (
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-7 py-3 bg-black text-white text-[12px] font-600 tracking-[0.08em] uppercase hover:bg-[#1a5cff] transition-colors"
                  style={{ fontFamily: "'Geist', sans-serif" }}
                >
                  Visitar site →
                </a>
              )}
            </div>
            <div className="w-full bg-[#f0f0f0] overflow-hidden" style={{ aspectRatio: "16/9" }}>
              <img src={project.img} alt={project.imgAlt} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT INFO */}
      <section className="border-b border-black/08">
        <div className="max-w-[1100px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Função", val: project.role },
            { label: "Ferramentas", val: project.tools.join(", ") },
            { label: "Duração", val: project.duration },
            { label: "Equipe", val: project.team },
          ].map(({ label, val }) => (
            <div key={label}>
              <div className="text-[10px] font-600 tracking-[0.16em] uppercase text-[#aaa] mb-2">{label}</div>
              <div style={{ fontFamily: "'Geist', sans-serif" }} className="text-[14px] font-600 text-black leading-snug">{val}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROBLEM — dark */}
      {project.problem && (
        <section className="bg-[#0a0a0a] py-24">
          <div className="max-w-[1100px] mx-auto px-6 grid md:grid-cols-[200px_1fr] gap-16 items-start">
            <div>
              <h2 style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.03em" }} className="text-[28px] font-800 text-white leading-tight">
                Problema
              </h2>
            </div>
            <p className="text-[16px] text-[#aaa] leading-relaxed pt-1">
              {project.problem}
            </p>
          </div>
        </section>
      )}

      {/* TOOLS STRIP */}
      {project.toolIcons?.length ? (
        <section className="py-8 border-b border-black/08 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="flex items-center justify-center gap-5 flex-wrap">
              {project.toolIcons.map(({ name, slug }) => (
                <div key={name} className="flex flex-col items-center gap-2">
                  <div className="w-14 h-14 bg-[#f0f0f0] flex items-center justify-center overflow-hidden p-2.5" style={{ borderRadius: "14px" }}>
                    <img
                      src={resolveIcon(slug)}
                      alt={name}
                      className="w-full h-full"
                      style={{ objectFit: "contain", filter: "brightness(0)" }}
                    />
                  </div>
                  <span className="text-[9px] tracking-[0.05em] text-[#aaa] uppercase" style={{ fontFamily: "'Geist', sans-serif" }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* DESIGN PROCESS — white */}
      {project.process.length > 0 && (
        <section className="py-24 border-b border-black/08">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="mb-14">
              <h2 style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.03em" }} className="text-[28px] font-800 text-black">
                Processo de Design
              </h2>
            </div>
            <div className="flex flex-col" style={{ gap: "50px" }}>
              {project.process.map((step, i) => (
                <div key={i}>
                  <div className={`border-t border-black/08 pt-8 ${(step.mockupDesktop || step.mockupMobile) ? "mb-8" : ""}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span style={{ fontFamily: "'Geist', sans-serif" }} className="text-[11px] font-600 tracking-[0.12em] text-[#1a5cff]">
                        0{i + 1}
                      </span>
                      <h3 style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.02em" }} className="text-[18px] font-700 text-black">
                        {step.title}
                      </h3>
                      {step.icons?.map((slug) => (
                        <img key={slug} src={resolveIcon(slug)} alt={slug} className="w-3.5 h-3.5" style={{ objectFit: "contain", filter: "brightness(0)" }} />
                      ))}
                    </div>
                    <p className="text-[14px] text-[#666] leading-relaxed max-w-[620px]">{step.desc}</p>
                  </div>

                  {(step.mockupDesktop || step.mockupMobile) && (
                    <div className="grid gap-4" style={{ gridTemplateColumns: step.mockupDesktop && step.mockupMobile ? "1fr 1fr" : "1fr" }}>
                      {step.mockupDesktop && (
                        <div className="bg-[#f5f5f5] overflow-hidden" style={{ aspectRatio: "4/3" }}>
                          <img src={step.mockupDesktop} alt={`${step.title} — desktop`} className="w-full h-full object-cover" />
                        </div>
                      )}
                      {step.mockupMobile && (
                        <div className="bg-[#f5f5f5] overflow-hidden" style={{ aspectRatio: "4/3" }}>
                          <img src={step.mockupMobile} alt={`${step.title} — mobile`} className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* RESULT — white */}
      {project.result && (
        <section className="py-24 border-b border-black/08">
          <div className="max-w-[1100px] mx-auto px-6">
            {/* Header + description */}
            <div className="grid md:grid-cols-[200px_1fr] gap-16 items-start mb-16">
              <div>
                  <h2 style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.03em" }} className="text-[28px] font-800 text-black leading-tight">
                  Resultado Final
                </h2>
              </div>
              <p className="text-[16px] text-[#555] leading-relaxed pt-1">
                {project.result}
              </p>
            </div>

            {/* Two-column photo grid */}
            {(project.resultDesktopImgs?.length || project.resultMobileImgs?.length) ? (
              <div className="grid grid-cols-[1.5fr_1fr] gap-6 items-stretch">
                {/* Desktop column — 16:9 */}
                {project.resultDesktopImgs?.length ? (
                  <div className="flex flex-col justify-between h-full gap-4">
                    {project.resultDesktopImgs.map((src, i) => (
                      <div key={i} className="relative bg-[#f0f0f0] overflow-hidden w-full" style={{ aspectRatio: "16/9", minHeight: "350px" }}>
                        <img src={src} alt={`Resultado desktop ${i + 1}`} className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, white 100%)" }} />
                      </div>
                    ))}
                  </div>
                ) : null}

                {/* Mobile column — 2:3 */}
                {project.resultMobileImgs?.length ? (
                  <div className="flex flex-col justify-between h-full gap-4">
                    {project.resultMobileImgs.map((src, i) => (
                      <div key={i} className="relative bg-[#f0f0f0] overflow-hidden w-full" style={{ aspectRatio: "2/3", borderRadius: "44px 44px 0 0" }}>
                        <img src={src} alt={`Resultado mobile ${i + 1}`} className="w-full h-full object-cover" style={{ objectPosition: "center top" }} />
                        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 50%, white 100%)" }} />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>
      )}

      {/* IMPACT — dark */}
      {project.impact.length > 0 && (
        <section className="bg-[#0a0a0a] py-24">
          <div className="max-w-[1100px] mx-auto px-6">
            <h2 style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.03em" }} className="text-[28px] font-800 text-white mb-14">
              Impacto
            </h2>
            <div className="grid grid-cols-1 gap-0 border-l border-white/08" style={{ gridTemplateColumns: `repeat(${project.impact.length}, 1fr)` }}>
              {project.impact.map(({ value, label }) => (
                <div key={label} className="border-r border-white/08 px-12 py-8">
                  <div style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.04em" }} className="text-[52px] font-800 text-white leading-none mb-2">
                    {value}
                  </div>
                  <div className="text-[12px] font-500 tracking-[0.1em] uppercase text-[#555]">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
