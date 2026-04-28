"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Logo from "./components/Logo";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal").forEach((node) => node.classList.add("visible"));
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const services = [
  { index: "01", title: "Derecho Penal", description: "Excarcelaciones, prisión preventiva, reducción de condenas y defensa en causas penales complejas." },
  { index: "02", title: "Derecho Penal Económico", description: "Defensa en fraudes, delitos económicos y lavado de activos ante organismos reguladores." },
  { index: "03", title: "Derecho Civil", description: "Contratos, sucesiones y responsabilidad civil con enfoque en la protección patrimonial." },
  { index: "04", title: "Derecho Migratorio", description: "Visas, permisos de residencia y trámites de ciudadanía para radicarse en Uruguay." },
  { index: "05", title: "Derecho Laboral", description: "Defensa ante despidos injustificados y protección de los derechos del trabajador." },
  { index: "06", title: "Derecho Comercial", description: "Constitución y asesoramiento continuo de sociedades comerciales en Uruguay." },
  { index: "07", title: "Derecho de Familia", description: "Divorcios, custodias y herencias con discreción y acompañamiento personalizado." },
  { index: "08", title: "Servicios Notariales", description: "Compraventas, poderes, testamentos, certificados y trámites ante el registro público." },
];

const values = [
  { label: "Honestidad",       desc: "Claridad absoluta en cada etapa del proceso." },
  { label: "Confidencialidad", desc: "Reserva total en la relación cliente-abogado." },
  { label: "Excelencia",       desc: "Rigor técnico y actualización jurídica permanente." },
  { label: "Compromiso",       desc: "Dedicación integral a cada caso sin excepción." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesRef = useReveal();
  const teamRef     = useReveal();
  const valuesRef   = useReveal();
  const contactRef  = useReveal();
  const processRef  = useReveal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-[#071828] min-h-screen overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#071828]/95 backdrop-blur-md border-b border-[#C9A96E]/15" : ""
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between py-4">
          <a href="#">
            <Logo size="md" />
          </a>

          <div className="hidden md:flex items-center gap-8">
            {["Servicios", "Equipo", "Valores", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link text-[11px] tracking-[0.18em] uppercase text-[#7A9BB5] hover:text-white transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-4 text-[11px] tracking-[0.16em] uppercase px-5 py-2.5 border border-[#C9A96E]/50 text-[#C9A96E] hover:bg-[#C9A96E]/10 hover:border-[#C9A96E] transition-all duration-300"
            >
              Consulta Inicial
            </a>
          </div>

          <button
            className="md:hidden text-[#C9A96E] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-px w-4 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-80 border-b border-[#C9A96E]/10" : "max-h-0"
        } bg-[#071828]/98 backdrop-blur-md`}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {["Servicios", "Equipo", "Valores", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-[12px] tracking-[0.2em] uppercase text-[#7A9BB5] hover:text-[#C9A96E] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 px-6 md:px-12 overflow-hidden">
        {/* Palacio Salvo background */}
        <div className="absolute inset-0">
          <Image
            src="/palacio_salvo.png"
            alt="Palacio Salvo, Montevideo"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Navy gradient overlay — heavy on the left where text lives, lighter on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071828] via-[#071828]/88 to-[#071828]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071828] via-transparent to-[#071828]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          {/* Eyebrow */}
          <div className="animate-fade-in flex items-center gap-4 mb-10">
            <span className="block w-12 h-px bg-[#C9A96E]" />
            <span className="text-[10px] tracking-[0.28em] uppercase text-[#C9A96E]">
              Estudio Jurídico & Notarial · Carrasco, Montevideo
            </span>
          </div>

          {/* Heading */}
          <h1
            className="animate-fade-up"
            style={{ fontFamily: "Cormorant Garamond, serif", lineHeight: 0.92 }}
          >
            <span className="block text-[clamp(52px,9vw,120px)] font-[300] text-white tracking-[-0.02em]">
              Derecho con
            </span>
            <span className="block text-[clamp(52px,9vw,120px)] font-[600] italic text-gold-gradient tracking-[-0.02em]">
              Integridad.
            </span>
            <span className="block text-[clamp(52px,9vw,120px)] font-[300] text-white tracking-[-0.02em]">
              Resultados con
            </span>
            <span className="block text-[clamp(52px,9vw,120px)] font-[600] italic text-gold-gradient tracking-[-0.02em]">
              Precisión.
            </span>
          </h1>

          <div className="animate-fade-in delay-400 mt-14 mb-10">
            <span className="block w-72 h-px bg-gradient-to-r from-[#C9A96E] to-transparent" />
          </div>

          <div className="animate-fade-up delay-300 flex flex-col md:flex-row items-start md:items-end gap-10 md:gap-20">
            <p className="max-w-md text-[15px] leading-relaxed text-[#7A9BB5] font-[300]">
              Más de <span className="text-[#C9A96E]">15 años</span> acompañando personas
              y empresas con soluciones jurídicas concretas. Especialistas en derecho
              penal, civil, comercial, laboral y servicios notariales integrales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#C9A96E] text-[#071828] text-[11px] tracking-[0.18em] uppercase font-[500] hover:bg-[#DFC08A] transition-colors duration-300"
              >
                Consulta Inicial
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white text-[11px] tracking-[0.18em] uppercase hover:border-white/40 transition-colors duration-300"
              >
                Ver Servicios
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="animate-fade-in delay-600 mt-20 grid grid-cols-3 gap-0 border-t border-[#C9A96E]/15 pt-10">
            {[
              { num: "15+", label: "Años de experiencia" },
              { num: "2",   label: "Oficinas en la región" },
              { num: "8",   label: "Áreas de práctica" },
            ].map((s) => (
              <div key={s.num} className="pr-8">
                <div
                  className="text-[clamp(32px,4vw,52px)] font-[300] text-gold-gradient leading-none mb-2"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {s.num}
                </div>
                <div className="text-[11px] tracking-[0.14em] uppercase text-[#7A9BB5]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in delay-800">
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#2A4A65]">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C9A96E]/50 to-transparent" />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="servicios" className="py-32 px-6 md:px-12 bg-[#0A1E30]">
        <div className="max-w-7xl mx-auto" ref={servicesRef}>
          <div className="reveal flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A96E] mb-4">
                Áreas de Práctica
              </p>
              <h2
                className="text-[clamp(36px,5vw,64px)] font-[300] text-white leading-tight"
                style={{ fontFamily: "Cormorant Garamond, serif" }}
              >
                Soluciones jurídicas
                <br />
                <em className="font-[500] text-gold-gradient">integrales.</em>
              </h2>
            </div>
            <p className="max-w-xs text-[14px] text-[#7A9BB5] leading-relaxed font-[300]">
              Cada área está atendida por especialistas con formación y
              experiencia específica en ese campo del derecho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1A3550]/40">
            {services.map((service, i) => (
              <div
                key={service.index}
                className={`reveal reveal-delay-${Math.min(i + 1, 5)} service-card bg-[#0A1E30] p-8 group cursor-default`}
              >
                <div className="text-[11px] tracking-[0.2em] text-[#C9A96E]/60 mb-6 font-mono">
                  {service.index}
                </div>
                <h3
                  className="text-[22px] font-[500] text-white mb-4 leading-snug group-hover:text-gold-gradient transition-all duration-300"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-[13px] text-[#7A9BB5] leading-relaxed font-[300]">
                  {service.description}
                </p>
                <div className="mt-8 h-px bg-gradient-to-r from-[#C9A96E]/0 via-[#C9A96E]/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-32 px-6 md:px-12 bg-[#071828] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)" }}
        />
        <div className="max-w-7xl mx-auto relative z-10" ref={processRef}>
          <div className="reveal text-center mb-20">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A96E] mb-4">Metodología</p>
            <h2
              className="text-[clamp(32px,4vw,54px)] font-[300] text-white"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Un proceso claro,{" "}
              <em className="font-[500] text-gold-gradient">sin sorpresas.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { num: "I",   title: "Consulta Inicial", desc: "Análisis confidencial de su situación y evaluación preliminar sin compromiso." },
              { num: "II",  title: "Investigación",    desc: "Estudio profundo del caso, antecedentes legales y estrategia jurídica." },
              { num: "III", title: "Acción Legal",     desc: "Ejecución de la estrategia: presentaciones, audiencias y negociaciones." },
              { num: "IV",  title: "Resolución",       desc: "Seguimiento hasta el cierre definitivo con informes al cliente." },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`reveal reveal-delay-${i + 1} p-10 border-l border-[#1A3550] first:border-l-0`}
              >
                <div
                  className="text-[56px] font-[300] text-[#C9A96E]/20 leading-none mb-6"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {step.num}
                </div>
                <h3
                  className="text-[20px] font-[500] text-white mb-4"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#7A9BB5] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="equipo" className="py-32 px-6 md:px-12 bg-[#0A1E30]">
        <div className="max-w-7xl mx-auto" ref={teamRef}>
          <div className="reveal mb-16">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A96E] mb-4">El Equipo</p>
            <h2
              className="text-[clamp(36px,5vw,64px)] font-[300] text-white leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Quiénes lo{" "}
              <em className="font-[500] text-gold-gradient">representan.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Gonzalo Frid */}
            <div className="reveal reveal-delay-1 bg-[#071828] border border-[#1A3550] group overflow-hidden">
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/gonzalo.png"
                  alt="Dr. Gonzalo Frid"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071828] via-[#071828]/20 to-transparent" />
                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#C9A96E] via-[#C9A96E]/60 to-transparent" />
              </div>

              <div className="p-10">
                <h3
                  className="text-[clamp(26px,3vw,38px)] font-[500] text-white leading-tight mb-1"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Gonzalo Frid
                </h3>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#C9A96E] mb-6">
                  Abogado · Escribano · Director
                </p>
                <div className="h-px bg-[#1A3550] mb-6" />
                <p className="text-[14px] text-[#7A9BB5] leading-relaxed">
                  Director del estudio con más de 15 años de trayectoria.
                  Especializado en derecho civil, comercial y servicios notariales.
                  Referente en la gestión de operaciones inmobiliarias y
                  corporativas en Uruguay.
                </p>
                <a
                  href="mailto:drgonzalofrid@gmail.com"
                  className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-[#C9A96E] hover:text-[#DFC08A] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  Contactar
                </a>
              </div>
            </div>

            {/* Daniela Spinelli */}
            <div className="reveal reveal-delay-2 bg-[#071828] border border-[#1A3550] group overflow-hidden">
              <div className="relative h-72 overflow-hidden">
                <Image
                  src="/daniela.png"
                  alt="Dra. Daniela Spinelli"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071828] via-[#071828]/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[#C9A96E] via-[#C9A96E]/60 to-transparent" />
              </div>

              <div className="p-10">
                <h3
                  className="text-[clamp(26px,3vw,38px)] font-[500] text-white leading-tight mb-1"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  Daniela Spinelli
                </h3>
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#C9A96E] mb-6">
                  Abogada · Socia · Penalista
                </p>
                <div className="h-px bg-[#1A3550] mb-6" />
                <p className="text-[14px] text-[#7A9BB5] leading-relaxed">
                  Especialista en derecho penal y penal económico. Con base en
                  Buenos Aires, lidera los casos de mayor complejidad en la región
                  con un enfoque estratégico y resultados concretos en defensa penal.
                </p>
                <a
                  href="mailto:dradanielaspinelli@gmail.com"
                  className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase text-[#C9A96E] hover:text-[#DFC08A] transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  Contactar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section id="valores" className="py-32 px-6 md:px-12 bg-[#071828] relative overflow-hidden">
        {/* Subtle horizontal grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(26,53,80,0.5) 79px, rgba(26,53,80,0.5) 80px)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10" ref={valuesRef}>
          <div className="reveal mb-20">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A96E] mb-4">Pilares del Estudio</p>
            <h2
              className="text-[clamp(36px,5vw,64px)] font-[300] text-white leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Lo que nos{" "}
              <em className="font-[500] text-gold-gradient">define.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-[#1A3550]">
            {values.map((v, i) => (
              <div
                key={v.label}
                className={`reveal reveal-delay-${i + 1} py-12 pr-10 border-r border-[#1A3550] last:border-r-0 group`}
              >
                <div className="w-8 h-px bg-[#C9A96E] mb-8 group-hover:w-14 transition-all duration-500" />
                <h3
                  className="text-[28px] font-[500] text-white mb-4 group-hover:text-gold-gradient transition-all duration-300"
                  style={{ fontFamily: "Cormorant Garamond, serif" }}
                >
                  {v.label}
                </h3>
                <p className="text-[13px] text-[#7A9BB5] leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contacto" className="py-32 px-6 md:px-12 bg-[#0A1E30]">
        <div className="max-w-7xl mx-auto" ref={contactRef}>
          <div className="reveal mb-16">
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#C9A96E] mb-4">Consulta sin compromiso</p>
            <h2
              className="text-[clamp(36px,5vw,64px)] font-[300] text-white leading-tight"
              style={{ fontFamily: "Cormorant Garamond, serif" }}
            >
              Hablemos de{" "}
              <em className="font-[500] text-gold-gradient">su caso.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact info */}
            <div className="reveal reveal-delay-1 space-y-12">
              <div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9A96E] mb-6">Montevideo, Uruguay</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg className="mt-0.5 shrink-0 text-[#C9A96E]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M7 1C4.8 1 3 2.8 3 5c0 3.3 4 8 4 8s4-4.7 4-8c0-2.2-1.8-4-4-4zm0 5.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" />
                    </svg>
                    <span className="text-[14px] text-[#7A9BB5]">Av. Alfredo Arocena & Av. Gral Rivera, Carrasco</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="shrink-0 text-[#C9A96E]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 2.5C2 2.2 2.2 2 2.5 2h2l1 3L4.2 6.3a9 9 0 004.5 4.5L10 9.5l3 1V13c0 .3-.2.5-.5.5C5.6 13.5.5 8.4.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <a href="tel:+59891002848" className="text-[14px] text-[#7A9BB5] hover:text-[#C9A96E] transition-colors">+598 91 002 848</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="shrink-0 text-[#C9A96E]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    <a href="mailto:drgonzalofrid@gmail.com" className="text-[14px] text-[#7A9BB5] hover:text-[#C9A96E] transition-colors">drgonzalofrid@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#1A3550]" />

              <div>
                <p className="text-[10px] tracking-[0.22em] uppercase text-[#C9A96E] mb-6">Buenos Aires, Argentina</p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <svg className="shrink-0 text-[#C9A96E]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 2.5C2 2.2 2.2 2 2.5 2h2l1 3L4.2 6.3a9 9 0 004.5 4.5L10 9.5l3 1V13c0 .3-.2.5-.5.5C5.6 13.5.5 8.4.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                    <a href="tel:+5491121657675" className="text-[14px] text-[#7A9BB5] hover:text-[#C9A96E] transition-colors">+54 9 11 2165-7675</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="shrink-0 text-[#C9A96E]" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <rect x="1" y="3" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
                      <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2" />
                    </svg>
                    <a href="mailto:dradanielaspinelli@gmail.com" className="text-[14px] text-[#7A9BB5] hover:text-[#C9A96E] transition-colors">dradanielaspinelli@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="reveal reveal-delay-2">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group">
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#7A9BB5] mb-2 group-focus-within:text-[#C9A96E] transition-colors">Nombre</label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-[#1A3550] focus:border-[#C9A96E] outline-none py-3 text-[14px] text-white placeholder:text-[#2A4A65] transition-colors duration-300"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div className="group">
                    <label className="block text-[10px] tracking-[0.2em] uppercase text-[#7A9BB5] mb-2 group-focus-within:text-[#C9A96E] transition-colors">Email</label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-[#1A3550] focus:border-[#C9A96E] outline-none py-3 text-[14px] text-white placeholder:text-[#2A4A65] transition-colors duration-300"
                      placeholder="su@email.com"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#7A9BB5] mb-2 group-focus-within:text-[#C9A96E] transition-colors">Área de consulta</label>
                  <select className="w-full bg-[#071828] border-b border-[#1A3550] focus:border-[#C9A96E] outline-none py-3 text-[14px] text-[#7A9BB5] transition-colors duration-300 cursor-pointer appearance-none">
                    <option value="">Seleccione un área</option>
                    <option>Derecho Penal</option>
                    <option>Derecho Civil</option>
                    <option>Derecho Laboral</option>
                    <option>Derecho Comercial</option>
                    <option>Derecho de Familia</option>
                    <option>Derecho Migratorio</option>
                    <option>Servicios Notariales</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-[10px] tracking-[0.2em] uppercase text-[#7A9BB5] mb-2 group-focus-within:text-[#C9A96E] transition-colors">Descripción breve</label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-[#1A3550] focus:border-[#C9A96E] outline-none py-3 text-[14px] text-white placeholder:text-[#2A4A65] transition-colors duration-300 resize-none"
                    placeholder="Cuéntenos brevemente sobre su consulta..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 py-4 bg-[#C9A96E] text-[#071828] text-[11px] tracking-[0.2em] uppercase font-[500] hover:bg-[#DFC08A] transition-colors duration-300 flex items-center justify-center gap-3"
                >
                  Enviar Consulta
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <p className="text-[11px] text-[#2A4A65] text-center">
                  Su consulta es confidencial. Respondemos dentro de las 24 horas hábiles.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#1A3550] py-12 px-6 md:px-12 bg-[#050F1A]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo size="sm" />

          <p className="text-[11px] text-[#2A4A65] text-center">
            © {new Date().getFullYear()} Legal & Sign Montevideo. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-6">
            <a href="tel:+59891002848" className="text-[11px] tracking-[0.14em] text-[#4A7A9B] hover:text-[#C9A96E] transition-colors uppercase">
              +598 91 002 848
            </a>
            <div className="w-px h-4 bg-[#1A3550]" />
            <a href="mailto:drgonzalofrid@gmail.com" className="text-[11px] tracking-[0.14em] text-[#4A7A9B] hover:text-[#C9A96E] transition-colors uppercase">
              Email
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
