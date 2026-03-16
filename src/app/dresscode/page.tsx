export default function DressCode() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#faf7f2",
        color: "#1f1a12",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 420,
          margin: "0 auto",
          padding: "16px 16px 90px",
        }}
      >
        <h1
          style={{
            fontSize: 24,
            fontWeight: 900,
            marginBottom: 16,
          }}
        >
          Dress Code
        </h1>

        <section
          style={{
            border: "1px solid rgba(0,0,0,0.08)",
            borderRadius: 20,
            padding: 16,
            marginBottom: 14,
            background: "rgba(255,255,255,0.9)",
            boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
          }}
        >
          <p style={{ fontSize: 13, lineHeight: 1.6 }}>
            Que cadascú es senti lliure de venir com vulgui.
          </p>

          <p style={{ fontSize: 13, lineHeight: 1.6 }}>
            Nosaltres anirem <strong>arregladets i guapos</strong>, però fugint de
            l’estil de les bodes convencionals.
          </p>

          <p style={{ fontSize: 13, lineHeight: 1.6 }}>
            Recomanem <strong>calçat mínimament còmode</strong> i portar
            <strong> alguna peça d’abric</strong>, ja que estarem en entorn de
            muntanya.
          </p>
        </section>

        {/* TARGETES VISUALS */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <div style={tipCard}>
            <div style={icon}>👞</div>
            <div>
              <div style={tipTitle}>Calçat còmode</div>
              <div style={tipText}>
                Millor evitar sabates massa delicades o poc pràctiques.
              </div>
            </div>
          </div>

          <div style={tipCard}>
            <div style={icon}>🧥</div>
            <div>
              <div style={tipTitle}>Alguna peça d’abric</div>
              <div style={tipText}>
                A la tarda o al vespre pot refrescar.
              </div>
            </div>
          </div>

          <div style={tipCard}>
            <div style={icon}>🌿</div>
            <div>
              <div style={tipTitle}>Estil lliure</div>
              <div style={tipText}>
                Boda de muntanya, sense rigidesa i amb molt d’encant.
              </div>
            </div>
          </div>
        </div>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: 10,
            textDecoration: "none",
            color: "#1f1a12",
            fontSize: 13,
          }}
        >
          ← Tornar a la Home
        </a>
      </div>
    </main>
  );
}

const tipCard: React.CSSProperties = {
  display: "flex",
  gap: 12,
  alignItems: "flex-start",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 18,
  padding: 14,
  background: "rgba(255,255,255,0.9)",
  boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
};

const icon: React.CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: 14,
  background: "rgba(139,111,71,0.12)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 18,
  flexShrink: 0,
};

const tipTitle: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 800,
  marginBottom: 4,
};

const tipText: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.5,
  color: "#6b5a3a",
};