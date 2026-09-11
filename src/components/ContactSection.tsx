import { useState } from "react";
import { useLocation, Link } from "react-router";
import { CONTACT_ITEMS } from "../data";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  function copyEmail() {
    navigator.clipboard.writeText("jvpereiradesign@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <>
      <section id="contact" className="py-40">
        <div className="max-w-[1100px] mx-auto px-6 flex flex-col items-start gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
          <div>
            <h2 style={{ fontFamily: "'Geist', sans-serif", letterSpacing: "-0.04em" }} className="text-[36px] font-800 mb-4">
              Contato
            </h2>
            <p className="text-[14px] text-[#555] leading-relaxed max-w-[280px]">
              Estou disponível para novos projetos, ou fazer parte da sua equipe.
            </p>
          </div>
          <div className="space-y-4 pt-2">
            {CONTACT_ITEMS.map(({ label, val, labelColor }) => (
              <div key={label} className="flex flex-col items-start gap-1 md:flex-row md:items-center md:gap-4">
                <span className="text-[10px] font-600 tracking-[0.14em] uppercase md:w-16" style={{ color: labelColor }}>{label}</span>
                {label === "Email" ? (
                  <button onClick={copyEmail} className="text-[13px] text-black font-500 underline cursor-pointer" style={{ fontFamily: "'Geist', sans-serif", background: "none", border: "none", padding: 0 }}>{val}</button>
                ) : label === "telefone" ? (
                  <a href="https://wa.me/5541992662573" target="_blank" rel="noopener noreferrer" className="text-[13px] text-black font-500 underline" style={{ fontFamily: "'Geist', sans-serif" }}>{val}</a>
                ) : label === "LinkedIn" ? (
                  <a href="https://www.linkedin.com/in/jo%C3%A3o-va-pereira/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-black font-500 underline" style={{ fontFamily: "'Geist', sans-serif" }}>{val}</a>
                ) : (
                  <span className="text-[13px] text-black font-500" style={{ fontFamily: "'Geist', sans-serif" }}>{val}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        {!isHome && (
          <div className="max-w-[1100px] mx-auto px-6 pt-12 border-t border-black/08 mt-16">
            <Link
              to="/"
              className="inline-block px-7 py-3 border border-black/20 text-[12px] font-600 tracking-[0.08em] uppercase hover:border-[#1a5cff] hover:text-[#1a5cff] transition-colors"
              style={{ fontFamily: "'Geist', sans-serif", textDecoration: "none", color: "inherit" }}
            >
              ← Voltar à home
            </Link>
          </div>
        )}
      </section>

      <div
        className="fixed bottom-8 left-1/2 -translate-x-1/2 px-5 py-3 bg-black text-white text-[12px] font-500 tracking-[0.06em] transition-all duration-300 pointer-events-none z-50"
        style={{ fontFamily: "'Geist', sans-serif", opacity: copied ? 1 : 0, transform: `translateX(-50%) translateY(${copied ? "0" : "8px"})` }}
      >
        Email copiado ✓
      </div>
    </>
  );
}
