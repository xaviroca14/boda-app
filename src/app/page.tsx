"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  const targetDate = useMemo(() => new Date("2026-04-04T12:30:00"), []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <main style={page} className="fade-up">
      <div style={wrap}>
        {/* LOGO */}
        <img
  src="/logo.png"
  alt="Logo Xavi i Marina"
  style={logo}
  className="logo-in logo-breath"
/>

        {/* HERO CASA */}
        <div style={heroCard}>
          <div style={{ position: "relative", height: 400 }}>
            <img
              src="/photos/casa/hero.webp"
              alt="Casal Sagrat Cor · Viladrau"
              style={heroImg}
            />
            <div style={heroOverlay} />
            <div style={heroText}>
              <div style={{ fontSize: 12, opacity: 0.92, letterSpacing: 0.8 }}>
                03–05 d’abril de 2026
              </div>
              <div style={heroTitle}>Xavier & Marina</div>
              <div style={{ fontSize: 13, opacity: 0.92, marginTop: 4 }}>
                Viladrau · muntanya · casa · gent estimada
              </div>
            </div>
          </div>
        </div>

        {/* MINI FOTOS CASA */}
        <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
          <img src="/photos/casa/dia.webp" alt="" style={miniImg} />
          <img src="/photos/casa/vista.webp" alt="" style={miniImg} />
        </div>

        {/* COMPTE ENRERE */}
        <div style={countdownCard}>
          <div style={countdownLabel}>Compte enrere</div>
          <div style={countdownGrid}>
            <CountdownBox value={timeLeft.days} label="dies" />
            <CountdownBox value={timeLeft.hours} label="hores" />
            <CountdownBox value={timeLeft.minutes} label="min" />
            <CountdownBox value={timeLeft.seconds} label="seg" />
          </div>
          <div style={countdownNote}>
            Dissabte 4 d’abril · 12:30 · Casal Sagrat Cor de Viladrau
          </div>
        </div>

        {/* TARGETES */}
        <div style={grid}>
          <AppCard href="/programa" title="🌿 Programa" desc="El cap de setmana pas a pas" />
          <AppCard href="/llocs" title="📍 Llocs" desc="On hem d’anar i ruta" />
          <AppCard href="/info/menu" title="🍷 Menú" desc="Dinar, ressopó i esmorzar" />
          <AppCard href="/info/rooms" title="🛏 Habitacions" desc="Refugi i distribució" />
          <AppCard href="/dresscode" title="🧥 Dress Code" desc="Pistes d’estil" />
          <AppCard href="/expedicio" title="🏔 L’Expedició" desc="La missió del cap de setmana" />
          <AppCard href="/info/music" title="🎶 Música" desc="Banda sonora" />
          <AppCard href="/fotos" title="📸 Fotos" desc="Puja i mira les fotos" />
        </div>

        {/* NOSALTRES */}
        <div style={sectionCard}>
          <div style={sectionTitle}>Nosaltres</div>

          <div style={{ marginTop: 10 }}>
            <img src="/photos/parella/hero.jpg" alt="Xavi i Marina" style={bigCouple} />
          </div>

          <div style={{ marginTop: 8, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            <img src="/photos/parella/01.jpeg" alt="" style={smallCouple} />
            <img src="/photos/parella/02.jpeg" alt="" style={smallCouple} />
            <img src="/photos/parella/03.jpeg" alt="" style={smallCouple} />
            <img src="/photos/parella/04.jpeg" alt="" style={smallCouple} />
          </div>

          <div style={note}>
            Tres dies, muntanya, família i amics. Gràcies per ser-hi 💛
          </div>
        </div>
      </div>

      {/* BARRA INFERIOR */}
      <div style={bottomBar}>
        <NavItem href="/" label="Home" active={pathname === "/"} />
        <NavItem href="/programa" label="Programa" active={pathname === "/programa"} />
        <NavItem href="/info/menu" label="Menú" active={pathname === "/info/menu"} />
        <NavItem href="/fotos" label="Fotos" active={pathname === "/fotos"} />
      </div>
    </main>
  );
}

function AppCard({
  href,
  title,
  desc,
}: {
  href: string;
  title: string;
  desc: string;
}) {
  return (
    <a
      href={href}
      style={card}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div style={{ fontSize: 15, fontWeight: 900, color: palette.text }}>{title}</div>
      <div style={{ marginTop: 4, fontSize: 12, color: palette.textSoft }}>{desc}</div>
    </a>
  );
}

function NavItem({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      style={{
        textDecoration: "none",
        fontSize: 11,
        fontWeight: 800,
        color: active ? palette.text : palette.muted,
        padding: "6px 10px",
        borderRadius: 999,
        background: active ? "rgba(139,111,71,0.12)" : "transparent",
        transition: "all 0.2s ease",
      }}
    >
      {label}
    </a>
  );
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div style={countdownBox}>
      <div style={countdownValue}>{String(value).padStart(2, "0")}</div>
      <div style={countdownSmall}>{label}</div>
    </div>
  );
}

function getTimeLeft(target: Date) {
  const now = new Date().getTime();
  const diff = target.getTime() - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const palette = {
  bg: "#fbf7f0",
  border: "rgba(0,0,0,0.08)",
  text: "#1f1a12",
  textSoft: "#6b5a3a",
  muted: "#a09175",
};

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: palette.bg,
  color: palette.text,
  fontFamily: "system-ui, sans-serif",
};

const wrap: React.CSSProperties = {
  maxWidth: 420,
  margin: "0 auto",
  padding: "16px 16px 110px",
};

const logo: React.CSSProperties = {
  width: "140px",
  margin: "8px auto 24px auto",
  display: "block",
  opacity: 0.95,
};

const heroCard: React.CSSProperties = {
  border: `1px solid ${palette.border}`,
  borderRadius: 28,
  overflow: "hidden",
  boxShadow: "0 10px 26px rgba(0,0,0,0.06)",
  background: "white",
};

const heroImg: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center 40%",
};

const heroOverlay: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to top, rgba(31,26,18,0.86), rgba(31,26,18,0.18))",
};

const heroText: React.CSSProperties = {
  position: "absolute",
  left: 16,
  right: 16,
  bottom: 16,
  color: "white",
};

const heroTitle: React.CSSProperties = {
  fontSize: 30,
  fontWeight: 900,
  marginTop: 6,
  letterSpacing: -0.2,
};

const miniImg: React.CSSProperties = {
  width: "50%",
  height: 110,
  objectFit: "cover",
  borderRadius: 18,
  border: `1px solid ${palette.border}`,
  background: "white",
};

const countdownCard: React.CSSProperties = {
  marginTop: 14,
  border: `1px solid ${palette.border}`,
  borderRadius: 20,
  background: "rgba(255,255,255,0.9)",
  padding: 14,
  boxShadow: "0 10px 24px rgba(0,0,0,0.05)",
};

const countdownLabel: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 900,
  color: palette.text,
  marginBottom: 10,
};

const countdownGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 8,
};

const countdownBox: React.CSSProperties = {
  borderRadius: 16,
  background: "#f3efe7",
  padding: "10px 6px",
  textAlign: "center",
};

const countdownValue: React.CSSProperties = {
  fontSize: 22,
  fontWeight: 900,
  lineHeight: 1,
};

const countdownSmall: React.CSSProperties = {
  fontSize: 11,
  color: palette.textSoft,
  marginTop: 6,
};

const countdownNote: React.CSSProperties = {
  marginTop: 10,
  fontSize: 12,
  color: palette.textSoft,
  lineHeight: 1.5,
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 12,
  marginTop: 14,
};

const card: React.CSSProperties = {
  display: "block",
  textDecoration: "none",
  border: `1px solid ${palette.border}`,
  borderRadius: 20,
  padding: 14,
  background: "rgba(255,255,255,0.9)",
  boxShadow: "0 10px 24px rgba(0,0,0,0.05)",
  transition: "transform 0.15s ease",
};

const sectionCard: React.CSSProperties = {
  marginTop: 14,
  border: `1px solid ${palette.border}`,
  borderRadius: 20,
  background: "rgba(255,255,255,0.9)",
  padding: 14,
  boxShadow: "0 10px 24px rgba(0,0,0,0.05)",
};

const sectionTitle: React.CSSProperties = {
  fontWeight: 900,
  fontSize: 14,
  color: palette.text,
};

const bigCouple: React.CSSProperties = {
  width: "100%",
  height: 260,
  objectFit: "cover",
  objectPosition: "center 30%",
  borderRadius: 20,
  border: `1px solid ${palette.border}`,
};

const smallCouple: React.CSSProperties = {
  width: "100%",
  height: 110,
  objectFit: "cover",
  borderRadius: 18,
  border: `1px solid ${palette.border}`,
};

const note: React.CSSProperties = {
  marginTop: 10,
  fontSize: 13,
  color: palette.textSoft,
  lineHeight: 1.55,
};

const bottomBar: React.CSSProperties = {
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  backdropFilter: "blur(14px)",
  background: "rgba(251,247,240,0.78)",
  borderTop: `1px solid ${palette.border}`,
  display: "flex",
  justifyContent: "space-around",
  padding: "12px 0",
  maxWidth: 420,
  margin: "0 auto",
};