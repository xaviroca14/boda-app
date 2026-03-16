export default function Expedicio() {
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
          L&apos;Expedició
        </h1>

        <section style={card}>
          <p style={text}>
            Durant la celebració hi haurà una activitat dinamitzada.
          </p>

          <p style={text}>
            El fil conductor serà una <strong>expedició de muntanya </strong>
            que ha d&apos;assolir un cim.
          </p>

          <p style={text}>
            Al llarg de la tarda aniran apareixent diferents proves que
            marcaran el camí de l&apos;expedició.
          </p>
        </section>

        <section style={card}>
          <h2 style={h2}>🧭 Funcionament</h2>

          <p style={text}>
            Els convidats es dividiran en <strong>equips</strong> que es
            revelaran durant la celebració.
          </p>

          <p style={text}>
            Cada prova representarà un pas més dins de l&apos;ascens cap al cim.
          </p>
        </section>

        <section style={card}>
          <h2 style={h2}>🏔 El camí cap al cim</h2>

          <p style={text}>
            L&apos;objectiu final serà arribar simbòlicament al cim de
            l&apos;expedició.
          </p>

          <p style={text}>
            El camp base està preparat. L&apos;expedició començarà aviat.
          </p>
        </section>

        <section style={progressCard}>
          <div style={step}>⛺ Base camp</div>
          <div style={line}></div>

          <div style={step}>🧭 Camp 1</div>
          <div style={line}></div>

          <div style={step}>🗻 Camp 2</div>
          <div style={line}></div>

          <div style={step}>🏔 Cim</div>
        </section>

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

const card: React.CSSProperties = {
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 20,
  padding: 16,
  marginBottom: 14,
  background: "rgba(255,255,255,0.9)",
  boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
};

const progressCard: React.CSSProperties = {
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 20,
  padding: 16,
  background: "rgba(255,255,255,0.9)",
  boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 6,
  marginBottom: 14,
};

const step: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 700,
};

const line: React.CSSProperties = {
  width: 2,
  height: 16,
  background: "rgba(0,0,0,0.2)",
};

const text: React.CSSProperties = {
  fontSize: 13,
  lineHeight: 1.6,
  marginBottom: 8,
};

const h2: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 900,
  marginBottom: 8,
};