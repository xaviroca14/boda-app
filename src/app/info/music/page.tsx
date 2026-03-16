export default function Music() {
  return (
    <main style={{ padding: 16, maxWidth: 420, margin: "0 auto", fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ fontSize: 22, marginBottom: 12 }}>Banda sonora de la boda</h1>

      <div style={{ border: "1px solid #e5e5e5", borderRadius: 16, background: "#fbf7f0", padding: 14, color: "#333", fontSize: 13, lineHeight: 1.6 }}>
        <div style={{ fontWeight: 700, marginBottom: 6 }}>Cada cançó explica una història.</div>
        Proposa una cançó que et faci pensar en nosaltres i indica si és per un moment chill de dia o per la festa de nit.
      </div>

      <a
        href="https://forms.gle/bbsWEXG4EnFRGLd6A"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "block",
          marginTop: 14,
          border: "1px solid #e5e5e5",
          borderRadius: 16,
          padding: 14,
          textAlign: "center",
          textDecoration: "none",
          background: "white",
          color: "#111",
          fontWeight: 700,
          fontSize: 13
        }}
      >
        Proposa una cançó (Google Forms)
      </a>

      <a href="/" style={{ display: "inline-block", marginTop: 14, textDecoration: "none", color: "#111", fontSize: 13 }}>
        ← Tornar a la Home
      </a>
    </main>
  );
}
