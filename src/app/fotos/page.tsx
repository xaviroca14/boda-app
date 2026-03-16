export default function Fotos() {
  const albumUrl = "https://photos.app.goo.gl/wFf2sUujt4HosAsWA";

  return (
    <main style={page}>
      <div style={wrap}>
        <h1 style={h1}>Fotos de la boda</h1>

        <div style={introCard}>
          Si us plau, puja aquí totes les fotos que facis durant el cap de setmana.
          <br />
          Ens ajudaràs a construir el record 💛
        </div>

        <a
          href={albumUrl}
          target="_blank"
          rel="noreferrer"
          style={primaryBtn}
        >
          Obrir àlbum (pujar fotos)
        </a>

        <a
          href={albumUrl}
          target="_blank"
          rel="noreferrer"
          style={secondaryBtn}
        >
          Veure galeria
        </a>

        <a href="/" style={back}>
          ← Tornar a la Home
        </a>
      </div>
    </main>
  );
}

/* ESTILS */

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: "#ffffff",
  color: "#111",
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
};

const wrap: React.CSSProperties = {
  maxWidth: 420,
  margin: "0 auto",
  padding: "16px 16px 90px",
};

const h1: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 900,
  marginBottom: 14,
};

const introCard: React.CSSProperties = {
  border: "1px solid #e5e5e5",
  borderRadius: 18,
  background: "#fbf7f0",
  padding: 14,
  fontSize: 13,
  lineHeight: 1.6,
  color: "#333",
};

const primaryBtn: React.CSSProperties = {
  display: "block",
  marginTop: 14,
  borderRadius: 18,
  padding: 16,
  textAlign: "center",
  textDecoration: "none",
  background: "#111",
  color: "white",
  fontWeight: 900,
  fontSize: 14,
};

const secondaryBtn: React.CSSProperties = {
  display: "block",
  marginTop: 10,
  border: "1px solid #e5e5e5",
  borderRadius: 18,
  padding: 14,
  textAlign: "center",
  textDecoration: "none",
  background: "white",
  color: "#111",
  fontWeight: 700,
  fontSize: 13,
};

const back: React.CSSProperties = {
  display: "inline-block",
  marginTop: 16,
  textDecoration: "none",
  color: "#111",
  fontSize: 13,
};
