export default function Programa() {
  return (
    <main style={page}>
      <div style={wrap}>
        <h1 style={title}>Programa</h1>

        {/* DIVENDRES */}
        <section style={section}>
          <h2 style={h2}>Divendres · 3 d’abril</h2>

          <div style={card}>
            <p style={text}>
              <strong>09:00</strong> · Convocatòria a la <strong>Plaça de la Vila del Brull</strong>
            </p>

            <p style={text}>
              Des d’allà agafarem un <strong>autobús fins a Collformic</strong>,
              ja que és complicat aparcar a dalt.
            </p>

            <p style={text}>
              <strong>Ruta:</strong> Collformic → Matagalls → Collformic
            </p>

            <p style={text}>
              Excursió pel Montseny per començar el cap de setmana junts.
            </p>

            <p style={text}>
              Durant l’excursió farem una parada per dinar pel camí.
              <strong> Cadascú s’ha de portar el seu dinar.</strong>
            </p>

            <p style={text}>
              <strong>17:00 aprox.</strong> · Arribada al <strong>Casal Sagrat Cor de Viladrau </strong>
              per ajudar amb els preparatius del dia següent.
            </p>

            <p style={text}>
              Al vespre: sopar i nit a la casa.
            </p>
          </div>
        </section>

        {/* DISSABTE */}
        <section style={section}>
          <h2 style={h2}>Dissabte · 4 d’abril</h2>

          <div style={card}>
            <p style={text}>
              <strong>12:30</strong> · Convocatòria
            </p>

            <p style={text}>
              Benvinguda i agraïment.
            </p>

            <p style={text}>
              <strong>Pica-pica</strong>, dinar i sobretaula.
            </p>

            <p style={text}>
              Activitat dinamitzada.
            </p>

            <p style={text}>
              <strong>Ressopó</strong>, discoteca i barra lliure.
            </p>
          </div>
        </section>

        {/* DIUMENGE */}
        <section style={section}>
          <h2 style={h2}>Diumenge · 5 d’abril</h2>

          <div style={card}>
            <p style={text}>
              <strong>Esmorzar</strong> per qui es quedi a dormir a la casa.
            </p>
          </div>
        </section>

        <a href="/" style={back}>
          ← Tornar a la Home
        </a>
      </div>
    </main>
  );
}

const page: React.CSSProperties = {
  minHeight: "100vh",
  background: "#faf7f2",
  color: "#1f1a12",
  fontFamily: "system-ui, sans-serif",
};

const wrap: React.CSSProperties = {
  maxWidth: 420,
  margin: "0 auto",
  padding: "16px 16px 90px",
};

const title: React.CSSProperties = {
  fontSize: 24,
  fontWeight: 900,
  marginBottom: 14,
};

const section: React.CSSProperties = {
  marginBottom: 18,
};

const h2: React.CSSProperties = {
  fontSize: 16,
  fontWeight: 900,
  marginBottom: 10,
};

const card: React.CSSProperties = {
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 18,
  background: "rgba(255,255,255,0.9)",
  padding: 14,
  boxShadow: "0 8px 20px rgba(0,0,0,0.04)",
};

const text: React.CSSProperties = {
  fontSize: 13,
  color: "#444",
  lineHeight: 1.6,
  marginTop: 0,
  marginBottom: 10,
};

const back: React.CSSProperties = {
  display: "inline-block",
  marginTop: 8,
  textDecoration: "none",
  color: "#1f1a12",
  fontSize: 13,
};